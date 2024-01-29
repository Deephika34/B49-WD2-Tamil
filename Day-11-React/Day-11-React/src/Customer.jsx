import React, { useContext } from 'react'
import { Context_Api } from './Context-Api'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    number: Yup.string()
    .min(10, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
   
});

const Customer = () => {

 
  const inputHandle=()=>{
    document.body.style.border="none"
  }
  
  const {customerData,setCustomerData,createCustomer,setCreateCustomer,editBtn,setEditBtn,submitHandleCustomer,customerDelete}=useContext(Context_Api)
   


  return (
    <div className="container text-center " style={{width:"1800px"}}>
<h1>CUSTOMER LIST</h1>
    <br />
    {editBtn?
<div className="container border rounded-5 p-3 text-center">
  <div>
    <div className="row">
      <div className="col">
      <h2>ADD A NEW CUSTOMER TO LIBRARY</h2>
<br/>
<br/>
<Formik
   initialValues={{
  name:"",
  number:"",
  email:"",
   }}
   validationSchema={SignupSchema}
   onSubmit={values => {
     // same shape as initial values
     
     submitHandleCustomer(values)
     
   }}
 >
   {({ errors, touched }) => (
     <Form>
      <div className="feild-in d-inline-block">
      <Field onClick={()=>inputHandle} name="name" placeholder="Customer Name" />
       {errors.name && touched.name ? (
         <div style={{color:"red",margin:"0"}}>{errors.name}</div>
       ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
      </div>
      <br />
      <div className="feild-in d-inline-block">
      <Field onClick={()=>inputHandle} name="number" type="number" placeholder="Moblie Number" />
       {errors.number && touched.number ? (
         <div  style={{color:"red",margin:"0"}}>{errors.number}</div>
       ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
      </div>
      <br />
      <div className="feild-in d-inline-block">
      <Field onClick={()=>inputHandle} name="email" type='e-mail' placeholder="Enter Your Mail" />
       {errors.email && touched.email ? (
         <div  style={{color:"red",margin:"0"}}>{errors.email}</div>
       ) : <div style={{color:"#1d2634",margin:"0"}}>null</div>}
      </div>


      <br />
       <br />
       
       <button type="submit" className="btn btn-success m-1">Add Customer</button>
<button type="button" className="btn btn-danger m-1" onClick={()=>setEditBtn(false)} >Cancel Adding</button>

     </Form>
   )}
 </Formik>
      </div>
    </div>
  </div></div>:
        <button type="button" className="btn btn-success" onClick={()=>{setEditBtn(true)}}>Creat New Customer+</button>}
<br />
<br />
<table className="table" style={{width:"1200px"}}>
<thead>
  <tr>
    <th scope="col">Id</th>
    <th scope="col">Name</th>
    <th scope="col">Mobile Number</th>
    <th scope="col">E-Mail</th>
    <th scope="col">Crud</th>
  </tr>
</thead>
<tbody>
 { customerData.map((customer,index)=>(
<tr key={index}>
   <td className='align-middle'>{customer.id}</td>
    <td className='align-middle'>{customer.name}</td>
    <td className='align-middle'>{customer.number}</td>
    <td className='align-middle'>{customer.email}</td>
    <td className='d-flex align-middle justify-content-around'>
      <button className='btn btn-danger' onClick={()=>customerDelete(customer.id)}>Delete</button></td>
  </tr>
 ))
 
}
 
</tbody>
</table>
</div>
  )
}

export default Customer