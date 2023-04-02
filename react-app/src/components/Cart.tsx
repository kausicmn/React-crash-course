import React from 'react'
interface Props{
    CartItems:string[]
    onClear:()=>void
}
const Cart = ({CartItems,onClear}:Props) => {
  return (
    <>
    <div>Cart</div>
    <ul>{CartItems.map(item=><li key={item}>{item}</li>)}</ul>
    <button onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart