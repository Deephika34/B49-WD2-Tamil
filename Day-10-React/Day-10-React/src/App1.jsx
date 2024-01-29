import { useRef,useState, useEffect,} from 'react'
import './App.css'
import axios from 'axios'
import User_Cards from './User_Cards'

function Appp1() {
 
  const [button,setButton]=useState(false)
  const [getData,setGetData]=useState([]);
  const [rerender,setRerender]=useState(false)

  const [getInput1,setGetInput1]=useState({
    name:"",
    username:"",
    email:"",
    street:"",
    lat:"",
    lng:"",
    city:"",
  })

  const handleInput=(e)=>{
    const {name,value}=e.target;
    setGetInput1({...getInput1,[name]:value})

  }
const createHandle=()=>{
  axios.post('https://6558edfce93ca47020a9e776.mockapi.io/dummyjson/posts/',getInput1)
  .then(res=>{
    alert("Data Created Successfully")
setButton(false);
setRerender(!rerender);

  }).catch(err=>console.log(err))
}


useEffect(()=>{
  axios.get('https://6558edfce93ca47020a9e776.mockapi.io/dummyjson/posts/')
  .then(res=>{setGetData(res.data),console.log(res.data)}).catch(err=>console.log(err))
  console.log("rerender")
},[rerender])
  return (
    <>
    {button?
    <div className="container border p-3">
    <h2>CREAT NEW USER CARD</h2>
    <br/>
    <br/>
    <form >
    <input type="text" name='name'     placeholder='Enter Your Name'      value={getInput1.name}    onChange={handleInput} />  
    <input type="text" name='username' placeholder='Enter User Name'      value={getInput1.username}onChange={handleInput} /><br />
    <input type="text" name='email'    placeholder='Enter Your E-mail'    value={getInput1.email}   onChange={handleInput}/>
    <input type="text" name='street'   placeholder='Enter Your Street'    value={getInput1.street}  onChange={handleInput}/><br />
    <input type="text" name='lat'      placeholder='Enter Your latitude'   value={getInput1.lat}   onChange={handleInput}/>
    <input type="text" name='lng'      placeholder='Enter Your longitude'  value={getInput1.lng}   onChange={handleInput}/><br />
    <input type="text" name='city'     placeholder='Enter Your City'      value={getInput1.city}    onChange={handleInput}/><br/><br/>
    <button type="button" className="btn btn-success" onClick={createHandle} >Create Card</button>
    <button type="button" className="btn btn-danger" onClick={()=>setButton(false)} >Cancel Creating</button>
    </form></div>:
    <button type="button" className="btn btn-success" onClick={()=>{setButton(true)}}>Creat New Card +</button>}
   
  
  <div className="container-fluid">
    <div className="row ">
    {getData&&
    getData.map((e,index)=>
    (<User_Cards key={e.id} index={index} obj={{...e}} rerender={rerender} setRerender={setRerender} />))}
    </div>
  </div>
  
    </>
  )
}

export default Appp1