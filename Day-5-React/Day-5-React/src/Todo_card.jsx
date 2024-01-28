import React, { useState } from "react";

function Todo_card({
  val,
  val2,
  index,
  list,
  setList,
  cardFilter,
  setCardFilter,
  handlebtn,
}) {
  const [btnEdit, setBtnEdit] = useState(false);
  const [edit1, setEdit1] = useState(val);
  const [edit2, setEdit2] = useState(val2);

  const editHandle = () => {
    if (edit1 && edit2) {
      let edited = list.filter((e, i) => {
        if (i == index) {
          return (e.name = edit1), (e.desc = edit2);
        } else {
          return edit1, edit2;
        }
      });
      setList(edited);
      setBtnEdit(false);
      setEdit1("");
      setEdit2("");
    } else {
      alert("FILL THE BOTH INPUT FEILD TO CREAT TO-DO CARD");
    }
  };

  return (
    <>
      <div className="col mb-5">
        <h3>{index}</h3>
        <p>Name : {val}</p>
        <p> Description : {val2}</p>
        <label>
          Status
          <select
            onChange={(e) => {
              list.map((itm) => itm.cardFilter === e.target.value);
            }}
          >
            <option value={"completed"}>Completed</option>
            <option value={"incomplete"}>Incomplete</option>
          </select>
        </label>

        <div className="foot">
          {btnEdit ? (
            <div>
              <input
                type="text"
                value={edit1}
                onChange={(e) => {
                  setEdit1(e.target.value);
                }}
                placeholder="Todo Name"
              />
              <br />
              <input
                type="text"
                value={edit2}
                onChange={(e) => {
                  setEdit2(e.target.value);
                }}
                placeholder="Todo Description"
              />
              <br />
              <button onClick={editHandle}>Update</button>
            </div>
          ) : (
            ""
          )}

          <button onClick={() => setBtnEdit(true)}>Edit</button>
          <button
            onClick={() => {
              let deleted = list.filter((e, i) => i != index);
              alert("DO YOU WANT TO DELETE THIS CARD");
              setList(deleted);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo_card;