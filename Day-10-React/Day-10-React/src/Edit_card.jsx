import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'


function Edit_card() {
  const {id}=useParams()
  const navigate=useNavigate();
  const [edit,setEdit]=useState([])


  useEffect(()=>{
    axios.get('https://6558edfce93ca47020a9e776.mockapi.io/dummyjson/posts/'+id)
    .then(res=>setEdit(res.data))
    .catch(err=>console.log(err))
  },[])



  const handleEdit=()=>{
    axios.put('https://6558edfce93ca47020a9e776.mockapi.io/dummyjson/posts/'+id,edit)
    .then(res=>{
      alert("Updated Successfully")
      navigate('/')
    })
   
    }
  return (
   <div>
     <div className="container border p-3">
    <h2>EDIT EXISISTING USER CARD</h2>
    <br/>
    <br/>
    <form >
    <input type="text" name='name'     placeholder='Enter Your Name'    onChange={(e)=>setEdit({...edit,name:e.target.value})}     value={edit.name}   />  
    <input type="text" name='username' placeholder='Enter User Name'    onChange={(e)=>setEdit({...edit,username:e.target.value})} value={edit.username} /><br />
    <input type="text" name='email'    placeholder='Enter Your E-mail'  onChange={(e)=>setEdit({...edit,email:e.target.value})}    value={edit.email}   />
    <input type="text" name='street'   placeholder='Enter Your Street'  onChange={(e)=>setEdit({...edit,street:e.target.value})}   value={edit.street}  /><br />
    <input type="text" name='lat'     placeholder='Enter Your latitude'   onChange={(e)=>setEdit({...edit,lat:e.target.value})}    value={edit.lat}   />
    <input type="text" name='lng'    placeholder='Enter Your Longitude'   onChange={(e)=>setEdit({...edit,lng:e.target.value})}    value={edit.lng}   /><br/>
    <input type="text" name='city'     placeholder='Enter Your City'    onChange={(e)=>setEdit({...edit,city:e.target.value})}     value={edit.city}    /><br/><br/>

    <br/>
    <br/>
    <button type="button" className="btn btn-outline-primary" onClick={handleEdit} >Update Card</button >
    <button type="button" className="btn btn-outline-danger" onClick={()=>navigate('/')} >Cancle Update</button >
    </form>
    </div>
   </div>
  )
}

export default Edit_card