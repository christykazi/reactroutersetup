import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Users from './Component/Users'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/services" element ={<Services/>}/>
      <Route path='/users' element ={<Users/>}/>
    
    </Routes>
   </BrowserRouter>
  )
}

export default App