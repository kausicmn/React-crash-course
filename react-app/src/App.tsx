import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Expandable from './components/Expandable';

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
    <Expandable maxchar={10}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eligendi rem in veniam quis delectus corrupti minus commodi, amet pariatur laudantium quaerat optio dicta facere, quo debitis officiis assumenda quia suscipit! Sunt iusto possimus mollitia, incidunt consequatur nostrum inventore, non neque eius totam aspernatur voluptatibus magnam ipsum minima quaerat laborum corporis quidem accusantium exercitationem, alias dignissimos? In quos sint commodi asperiores voluptas eos mollitia consectetur sed molestias reprehenderit, voluptatibus dolorem quo ad id molestiae doloribus iure cum, officiis, eum eligendi. Atque dignissimos accusamus animi nam recusandae autem! Quas explicabo, voluptatum temporibus esse odit maiores officiis numquam! Officia eius recusandae sit.</Expandable>
    {Cart.items.map(item=><p>{item.id} {item.quantity} {item.title}</p>)}
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App