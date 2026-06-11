
import './App.css'
import Home from './Components/Paginas/Home'
import Inter from './Components/Paginas/Inter'
import Perfil from './Components/Paginas/Perfil'
import Corpo from './Components/Corpo/Corpo'
import Pratica from './Components/Paginas/Pratica'
import Footer from './Components/Footer/Footer'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='app'> 
      <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Inter' element={<Inter/>} />
           <Route path='/Pratica' element={<Pratica/>} />
            <Route path='/Perfil' element={<Perfil/>} />
        </Routes>
         <div>
           <Footer/>
         </div> 
      </BrowserRouter>
    </div>
  )
}

export default App
