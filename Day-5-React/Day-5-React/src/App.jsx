import { useState } from "react";
import "./App.css";
import Todo_card from "./Todo_card";

function App() {
  const [name, setName] = useState("");
  const [desc, setdesc] = useState("");
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState("all");
  const [cardFilter, setCardFilter] = useState("incomplete");

  const handlebtn = () => {
    if (name || desc) {
      setList([...list, { name, desc, cardFilter }]);
      setdesc("");
      setName("");
    } else {
      alert("FILL THE BOTH INPUT FEILD TO CREAT TO-DO CARD");
    }
  };
  console.log(list);

  return (
    <>
      <div className="container-fluid">
        <h4>My todo</h4>

        <br />
        <div className="input">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Todo Name"
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            placeholder="Todo Description"
          />
          <button onClick={handlebtn}>Add Todo</button>
        </div>
        <br />
        <br />
        <br />
        <div className="body">
          <h4>My Todo</h4>
          <div>
            <h5>
              Status Filter{" "}
              <select
                value={filtered}
                onChange={(e) => setFiltered(e.target.value)}
              >
                <option>All</option>
              </select>
            </h5>
          </div>
        </div>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {list.map((e, index) => (
              <Todo_card
                key={index}
                val={e.name}
                val2={e.desc}
                index={index}
                list={list}
                setList={setList}
                filtered={filtered}
                setFiltered={setFiltered}
                cardFilter={cardFilter}
                setCardFilter={setCardFilter}
                handlebtn={handlebtn}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;