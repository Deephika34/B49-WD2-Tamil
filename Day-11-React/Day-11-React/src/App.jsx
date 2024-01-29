import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Books from './Books'
import Categories from './Categories'
import Customer from './Customer'
import Inventory from './Inventory'
import Report from './Report'
import Settings from './Settings'
import { Context_Api } from './Context-Api'
import axios from 'axios';
import EditBookData from './EditBookData'


function App() {
  const [editBtn,setEditBtn]=useState(false)
  const [editBook,setEditBook]=useState(false)
  const [bookData,setBookData]=useState([])
  const [customerData,setCustomerData]=useState([])
  const [createBook,setCreateBook]=useState({
    title: '',
    author_name: '',
    ibsn_no: '',
    author_dob:'',
    publication_date:'',
    author_bio:''
  })
  const [createCustomer,setCreateCustomer]=useState({
    name:"",
    number:"",
    email:""
  })
  const [bookrerender,setBookRerender]=useState(false)
  const [customerRerender,setCustomerRerender]=useState(false)
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
console.log(bookData)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

//book data fetch
  useEffect(()=>{
axios.get("https://6558d1bde93ca47020a9c50c.mockapi.io/books")
.then(res=>{setBookData(res.data),console.log(res.data)})
.catch(err=>console.log(err.message))
  },[bookrerender])

 //customer Data fetch 
  useEffect(()=>{

    axios.get("https://6558d1bde93ca47020a9c50c.mockapi.io/profile/")
    .then(res=>{setCustomerData(res.data)})
    .catch(err=>console.log(err.message))
  },[customerRerender])

const submitHandle=(newBook)=>{

 axios.post("https://6558d1bde93ca47020a9c50c.mockapi.io/books/",newBook)
 .then(res=>{
  alert("Book Added Successfully")
  setEditBtn(false);
 setBookRerender(!bookrerender)
}
 )
 .catch(err=>console.log(err.message));
 
}



const submitHandleCustomer=(newCustoner)=>{
  axios.post("https://6558d1bde93ca47020a9c50c.mockapi.io/profile/",newCustoner)
  .then(res=>{
    alert("Customer Added Successfully")
    setEditBtn(false);
    setCustomerRerender(!customerRerender)
  })
  .catch(err=>console.log(err.message));

}
const customerDelete=(id)=>{
  const conf=window.confirm('Do you want to Delete this Record')
  if(conf){
    axios.delete('https://6558d1bde93ca47020a9c50c.mockapi.io/profile/'+id)
    .then((res)=>{
      console.log(res)
      alert("Customer Record has been Deleted")
      setCustomerRerender(!customerRerender)
    
    }).catch((err)=>console.log(err))
  }
}

const  bookDeleteHandle=(id)=>{
  axios.delete("https://6558d1bde93ca47020a9c50c.mockapi.io/books/"+id)
  .then((res)=>{
    alert("Book Record has been Deleted")
    setBookRerender(!bookrerender)
  
  }).catch((err)=>console.log(err.message))
}



  return (
  <Context_Api.Provider value={{openSidebarToggle, setOpenSidebarToggle,OpenSidebar,bookData,
  setBookData,editBtn,setEditBtn,createBook,setCreateBook,submitHandle,customerData,setCustomerData,
  createCustomer,setCreateCustomer,submitHandleCustomer,customerDelete,bookDeleteHandle,
  editBook,setEditBook,bookrerender,setBookRerender}}>  
      <div className='grid-container'>
      <BrowserRouter>
      <Header />
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/book' element={<Books/>}></Route>
        <Route path='/categories' element={<Categories/>}></Route>
        <Route path='/customers' element={<Customer/>}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
        <Route path='/reports' element={<Report/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/edit/:id' element={<EditBookData/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
    </Context_Api.Provider>

  )
}

export default App