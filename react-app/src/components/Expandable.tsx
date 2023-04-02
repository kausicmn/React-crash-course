import React, { useState } from 'react'
interface Props{
    children:string;
    maxchar?:number
}
const Expandable = ({children,maxchar=100}:Props) => {
    const [isExpanded,setExpanded]=useState(false);
    if (children.length<=maxchar) return <p>{children}</p>;
    const text=isExpanded?children.substring(0,maxchar):children;
    return <p>{text}...<button onClick={()=>setExpanded(!isExpanded)}>{isExpanded?'Less' :'More'}</button></p>
  
};

export default Expandable