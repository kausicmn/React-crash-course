import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App () {
  const [Cart,setCart]=useState({
    discount:.1,
    items:[
      {id:1,title:'Product 1',quantity:1},
      {id:2,title:'Product 2',quantity:1},
    ]
    
  });
  const handleClick =() =>{
    setCart({...Cart,items:Cart.items.map(item=>item.id===1?{...item,quantity:item.quantity+1}:item)})
  }
  return (
    <>
    <div>App</div>
    {Cart.items.map(item=><p>{item.id} {item.quantity} {item.title}</p>)}
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App