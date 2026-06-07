
import './App.css'
import Home from './Components/Paginas/Home'
import Inter from './Components/Paginas/Inter'
import Corpo from './Components/Corpo/Corpo'
import Footer from './Components/Footer/Footer'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='app'> 
      <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Inter' element={<Inter/>} />
        </Routes>
         <div>
           <Footer/>
         </div> 
      </BrowserRouter>
    </div>
  )
}

export default App
