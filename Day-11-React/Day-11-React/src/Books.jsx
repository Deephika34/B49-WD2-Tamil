import React, { useContext } from "react";
import { Context_Api } from "./Context-Api";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import EditBookData from "./EditBookData";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  author_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  ibsn_no: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  author_dob: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  publication_date: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  author_bio: Yup.string()
    .min(2, "Too Short!")
    .max(1500, "Too Long!")
    .required("Required"),
});

const Books = () => {
  const {
    bookData,
    editBtn,
    setEditBtn,
    createBook,
    setCreateBook,
    submitHandle,
    bookDeleteHandle,
    editBook,
    setEditBook,
    editBtn1,
    setEditBtn1,
  } = useContext(Context_Api);

  const inputHandle = () => {
    document.body.style.border = "none";
  };

  console.log(createBook);
  return (
    <div className="container text-center " style={{ width: "1800px" }}>
      <h1>BOOKS LIST</h1>
      <br />
      {editBtn ? (
        <div className="container border rounded-5 p-3 text-center">
          <div>
            <div className="row">
              <div className="col">
                <h2>ADD A NEW BOOK TO LIBRARY</h2>
                <br />
                <br />
                <Formik
                  initialValues={{
                    title: "",
                    author_name: "",
                    ibsn_no: "",
                    author_dob: "",
                    publication_date: "",
                    author_bio: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    // same shape as initial values

                    submitHandle(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="feild-in d-inline-block">
                        <Field
                          onClick={() => inputHandle}
                          name="title"
                          placeholder="Enter Book Title"
                        />
                        {errors.title && touched.title ? (
                          <div style={{ color: "red", margin: "0" }}>
                            {errors.title}
                          </div>
                        ) : (
                          <div style={{ color: "#1d2634", margin: "0" }}>
                            null
                          </div>
                        )}
                      </div>
                      <div className="feild-in d-inline-block">
                        <Field
                          onClick={() => inputHandle}
                          name="author_name"
                          placeholder="Enter Author Name"
                        />
                        {errors.author_name && touched.author_name ? (
                          <div style={{ color: "red", margin: "0" }}>
                            {errors.author_name}
                          </div>
                        ) : (
                          <div style={{ color: "#1d2634", margin: "0" }}>
                            null
                          </div>
                        )}
                      </div>
                      <br />

                      <div className="feild-in d-inline-block">
                        <Field
                          onClick={() => inputHandle}
                          name="ibsn_no"
                          placeholder="IBSN NO"
                        />
                        {errors.ibsn_no && touched.ibsn_no ? (
                          <div style={{ color: "red", margin: "0" }}>
                            {errors.ibsn_no}
                          </div>
                        ) : (
                          <div style={{ color: "#1d2634", margin: "0" }}>
                            null
                          </div>
                        )}
                      </div>
                      <div className="feild-in d-inline-block">
                        <Field
                          onClick={() => inputHandle}
                          name="author_dob"
                          placeholder="DOB"
                          type="date"
                        />
                        {errors.author_dob && touched.author_dob ? (
                          <div style={{ color: "red", margin: "0" }}>
                            {errors.author_dob}
                          </div>
                        ) : (
                          <div style={{ color: "#1d2634", margin: "0" }}>
                            null
                          </div>
                        )}
                      </div>
                      <br />

                      <div className="feild-out d-inline-block">
                        <Field
                          onClick={() => inputHandle}
                          name="publication_date"
                          placeholder="Published year"
                          type="number"
                          min="1900"
                          max="2099"
                          step="1"
                        />
                        {errors.publication_date && touched.publication_date ? (
                          <div style={{ color: "red", margin: "0" }}>
                            {errors.publication_date}
                          </div>
                        ) : (
                          <div style={{ color: "#1d2634", margin: "0" }}>
                            null
                          </div>
                        )}
                      </div>
                      <div className="feild-in d-inline-block">
                        <Field
                          onClick={() => inputHandle}
                          name="author_bio"
                          placeholder="Bio"
                        />
                        {errors.author_bio && touched.author_bio ? (
                          <div style={{ color: "red", margin: "0" }}>
                            {errors.author_bio}
                          </div>
                        ) : (
                          <div style={{ color: "#1d2634", margin: "0" }}>
                            null
                          </div>
                        )}
                      </div>

                      <br />
                      <br />

                      <button type="submit" className="btn btn-success m-1">
                        Add Book
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger m-1"
                        onClick={() => setEditBtn(false)}
                      >
                        Cancel Adding
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>{" "}
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setEditBtn(true);
          }}
        >
          Creat New Book +
        </button>
      )}
      <br />
      <br />
      <table className="table" style={{ width: "1250px" }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">AuthorName</th>
            <th scope="col">IBSN NO:</th>
            <th scope="col">Publication Date</th>
            <th scope="col">Bio</th>
            <th scope="col">Crud</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book, index) => (
            <tr key={index}>
              <td className="align-middle">{book.id}</td>
              <td className="align-middle">{book.title}</td>
              <td className="align-middle">{book.author_name}</td>
              <td className="align-middle">{book.ibsn_no}</td>
              <td className="align-middle">{book.publication_date}</td>
              <td className="align-middle">
                <span className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    View Bio
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <span className="dropdown-item" href="#">
                        {book.author_bio}
                      </span>
                    </li>
                  </ul>
                </span>
              </td>
              <td >
                <Link to={`/edit/${book.id}`} className="btn btn-success mx-1 ">
                  Edit
                </Link>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => bookDeleteHandle(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;