import React, { useState } from 'react'
import Nav from './Components/Nav/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './Components/Rout/Rout'
import Footer from './Components/Footer/Footer'
import Homeproduct from './Components/HomeProduct/HomeProduct'

const App =() => {
  //Add To Cart
  const [cart , setCart] = useState([]);
  //Shop page product
  const [shop , setShop] = useState(Homeproduct);
  //Shop Search Filter
  const [ search , setSearch] = useState('');
  //Shop Categary Fillter
  const Filter = (x) =>{
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x;
    })
    setShop(catefilter);
  }
  const allcatefilter = () => {
    setShop(Homeproduct); 
  }
  //Shop Search Filter
  const searchlength =(search || []).length ===0
  const searchproduct = () =>
  {
  if(searchlength){
    alert("Please Search Something !")
    setShop(Homeproduct);
  }
  else{
      const searchfilter = Homeproduct.filter((x) =>{
        return x.cat === search;
      })
      setShop(searchfilter);
  }
}
//Add To Cart
const addtocart = (product) =>{
  const exist = cart.find((x) => {
      return x.id === product.id
  })
  if(exist){
    alert("This product is alleady added in cart")
  }
  else{
    setCart([...cart , {...product , qty:1}])
    alert("Add To Cart")
  }
}
console.log(cart)
  return <>
      <BrowserRouter>
        <Nav search ={search} setSearch ={setSearch} searchproduct ={searchproduct}/>
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
        <Footer/>
      </BrowserRouter>
  </>
}

export default App