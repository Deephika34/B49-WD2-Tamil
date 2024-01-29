import React from 'react'
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Appp1 from './Appp1';
import Edit_card from './Edit_card'

function App() {

  return (

      <Router>
    <Routes>
      <Route path='/' exact  element={<Appp1/>}></Route>
      <Route path='/edit/:id'  element={<Edit_card/>}></Route>
    </Routes>
  </Router>
        
   
  )
}

export default App