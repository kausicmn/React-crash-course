import React, { useState } from 'react'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
interface LikeProps{
    color:string,
    onClick:()=>void
}

const Like = ({color,onClick}:LikeProps) => {
const [status,setStatus]=useState(false);
const toggle=()=> {
    setStatus(!status)
    onClick();
}
  return (
    status?<AiFillHeart onClick={toggle} color={color}></AiFillHeart>:<AiOutlineHeart onClick={toggle} color={color}></AiOutlineHeart>
  )
}

export default Like