import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
    <div className = 'app'>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Order' element={<PlaceOrder/>} />
    </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App