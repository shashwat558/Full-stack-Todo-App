
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Todolist from './pages/Todolist'
import ContextProvider from './Context/ContextProvider'

function App() {
  

  return (
    <ContextProvider>
      <Routes>
       <Route path='/signup' element={<Signup />}/>
       <Route path='/login' element={<Login />}/>
       <Route path='/todos' element={<Todolist />}/>

    </Routes>
    </ContextProvider>
    
       
      
        
      
      
    
  )
}

export default App
