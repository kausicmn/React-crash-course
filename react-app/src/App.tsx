import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App () {
  const [items,setitems]=useState(['Product 1','Product 2'])
  return (
    <>
    <div>App</div>
    <Navbar ItemCount={items.length}></Navbar>
    <Cart CartItems={items} onClear={()=>setitems([])}></Cart>
    </>
  )
}

export default App