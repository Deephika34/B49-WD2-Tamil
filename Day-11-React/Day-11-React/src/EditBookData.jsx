import React, { useContext } from 'react'
import { Context_Api } from './Context-Api'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
    title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    author_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    ibsn_no: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    author_dob: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    publication_date: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    author_bio: Yup.string()
    .min(2, 'Too Short!')
    .max(1500, 'Too Long!')
    .required('Required'),
    
 
});


const EditBookData = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const {bookrerender,setBookRerender}=useContext(Context_Api)
    

    const handleEdit=(edit)=>{
        axios.put('https://6558d1bde93ca47020a9c50c.mockapi.io/books/'+id,edit)
        .then(res=>{
          alert("Updated Successfully");
          setBookRerender(!bookrerender);
          navigate(-1);
          
        })
       
        }

  return (
    <div className="container text-center " style={{width:"1800px"}}>
    <div className="container border rounded-5 p-3 text-center">
    <div>
      <div className="row">
        <div className="col">
        <h2>EDIT EXISISTING BOOK DATA</h2>
  <br/>
  <br/>
  <Formik
     initialValues={{
       title: ``,
       author_name: ``,
       ibsn_no: ``,
       author_dob:``,
       publication_date:``,
       author_bio:``
     }}
     validationSchema={SignupSchema}
     onSubmit={values => {
       // same shape as initial values
       
       handleEdit(values)
       
     }}
   >
     {({ errors, touched }) => (
       <Form>
        <div className="feild-in d-inline-block">
        <Field name="title" placeholder="Enter Book Title" />
         {errors.title && touched.title ? (
           <div style={{color:"red",margin:"0"}}>{errors.title}</div>
         ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
        </div>
        <div className="feild-in d-inline-block">
        <Field name="author_name" placeholder="Enter Author Name" />
         {errors.author_name && touched.author_name ? (
           <div  style={{color:"red",margin:"0"}}>{errors.author_name}</div>
         ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
        </div>
        <br />
       
        <div className="feild-in d-inline-block">
        <Field name="ibsn_no" placeholder="IBSN NO" />
         {errors.ibsn_no && touched.ibsn_no ? (
           <div style={{color:"red",margin:"0"}}>{errors.ibsn_no}</div>
         ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
        </div>
        <div className="feild-in d-inline-block">
        <Field name="author_dob" placeholder="DOB" type="date" />
         {errors.author_dob && touched.author_dob ? (
           <div style={{color:"red",margin:"0"}}>{errors.author_dob}</div>
           ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
        </div>
        <br />
       
        <div className="feild-out d-inline-block">
        <Field name="publication_date" placeholder="Published year" type="number" min="1900" max="2099" step="1" />
         {errors.publication_date && touched.publication_date ? (
           <div style={{color:"red",margin:"0"}}>{errors.publication_date}</div>
         ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
        </div>
        <div className="feild-in d-inline-block">
        <Field name="author_bio" placeholder="Bio" />
         {errors.author_bio && touched.author_bio ? (
           <div style={{color:"red",margin:"0"}}>{errors.author_bio}</div>
         ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
        </div>

         <br />
         <br />
         
         <button type="submit" className="btn btn-success m-1">Update Book</button>
  <button type="button" className="btn btn-danger m-1" onClick={()=>navigate(-1)} >Cancel Update</button>

       </Form>
     )}
   </Formik>
        </div>
      </div>
    </div> </div>
    </div>
  )
}

export default EditBookData