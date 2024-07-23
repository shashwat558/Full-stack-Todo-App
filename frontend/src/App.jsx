
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/SignUp'

function App() {
  

  return (
    <Routes>
       <Route path='/signup' element={<Signup />}/>
       <Route path='/login' element={<Login />}/>

    </Routes>   
      
        
      
      
    
  )
}

export default App
