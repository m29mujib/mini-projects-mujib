import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Home/LandingPage'
import Navbar from './components/HalamanUtama/Navbar/Navbar'
import './App.css'
// import AddCakes from './components/AddCakes/AddCakes'
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import Cart from './components/ShoopingCart/Cart'
import Pesanan from './components/Pesanan/Pesanan'
import Costumer from './components/Costumer/Costumer';
import FormEditCostumer from './components/FormEdit/FormEditCostemer';

function App() {
  const { theme } = useSelector((store) => store.theme);

  useEffect(()=> {
    console.log(theme)
  })
  return (
    <div className={`${theme}`} >
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/pesanan' element={<Pesanan/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/costumer' element={<Costumer/>}/>
            <Route path='/formedit' element={<FormEditCostumer/>}/>
         </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
