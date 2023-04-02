import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App () {
  const [items,setitems]=useState({
    id:1,
    player:{
      name:"john",
    },
  });
  const handleClick =() =>{
    setitems({...items,player:{...items.player,name:"kausic"}})
  }
  return (
    <>
    <div>App</div>
    {items.player.name}
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App