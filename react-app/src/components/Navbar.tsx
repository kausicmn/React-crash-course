import React from 'react'
interface Props{
    ItemCount:number
}
const Navbar = ({ItemCount}:Props) => {
  return (
    <div>Navbar:{ItemCount}</div>
  )
}

export default Navbar