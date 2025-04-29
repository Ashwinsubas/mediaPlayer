
import { Route, Routes } from 'react-router'
import './App.css'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './bootstrap.min.css'



function App() {

  return (
    <>
    <Header/>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/history' element={<History/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
