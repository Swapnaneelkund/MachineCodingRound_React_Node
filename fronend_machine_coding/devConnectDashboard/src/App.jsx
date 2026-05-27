import './App.css'
import {Routes,Route}from "react-router-dom"
import Adduser from './components/Adduser.jsx'
import Navbar from './components/Navbar.jsx'
import Homepage from './components/Homepage.jsx'
import Userdata from './components/Userdata.jsx'
function App() {

  return (
  <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}>
      <Route path='userData' element={<Userdata/>}/>
    </Route>
    <Route path='/addUser' element={<Adduser/>}/>
    </Routes>
     </div>
  )
}

export default App
