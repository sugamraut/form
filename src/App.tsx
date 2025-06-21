import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/log-in/login'
import Register from './pages/register/register'
import Forget from './pages/forget-password/forget'
import "./assets/css/meadiaquery.scss"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/register'element={< Register/>}/>
      <Route path='/forget' element={<Forget/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
