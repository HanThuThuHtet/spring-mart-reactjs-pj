import React from 'react'
import {Routes,Route} from "react-router-dom"
import Products from './pages/Products'
import './App.css'
import Navbar from './components/Navbar'
import ProductDetail from './pages/ProductDetail'
const App = () => {
  return (
    <div className='container mx-auto bg-primary'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App