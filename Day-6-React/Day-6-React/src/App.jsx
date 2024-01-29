import './App.css'
import{BrowserRouter as Router,Route,Routes,Link}from "react-router-dom"
import All from './All'
import Fsd from './Fsd'
import Data_sci from './Data_sci'
import Cyber_secu from './Cyber_secu'
import Carrer from './Carrer'


function App() {

  return (
    <>
       <Router>
        <Link to='/'></Link>
        <Routes>
          <Route path='/' exact element={<All/>}>All</Route>
          <Route path='/fsd' element={<Fsd/>}/>
          <Route path='/Data' element={<Data_sci/>}/> 
          <Route path='/cyber' element={<Cyber_secu/>}/>
          <Route path='/carrer' element={<Carrer/>}/> 
        </Routes>
       </Router>
        

          
        
    </>
  )
}

export default App