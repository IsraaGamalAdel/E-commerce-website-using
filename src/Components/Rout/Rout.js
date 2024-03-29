import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import Cart from '../Crat/Cart'
import Contact from '../Contact/Contact'

const Rout = ({shop , Filter ,allcatefilter , addtocart , cart , setCart}) => {
    return <>
        <Routes>
            <Route path='/'  element={<Home addtocart={addtocart}/> }/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path='Shop' element={<Shop shop={shop} Filter={Filter}  allcatefilter={allcatefilter} addtocart={addtocart}/>} />
            <Route path='/contact' element={<Contact/>}/>
        </Routes>

    </>
}

export default Rout