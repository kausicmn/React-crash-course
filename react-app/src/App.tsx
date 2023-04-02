import { useState } from "react";
import ListGroup from "./components/ListGroup";
import {AiFillChrome} from "react-icons/ai"
import Like from "./components/Like/Like";
// import Button from "./components/Button";
let items=["New york","SF","Chennai",'Chicago']
// const handleClick=(item:String)=>{
//   console.log(item)
// }
function App() {
  const [alertVisible,setAlertVisibility]=useState(false);
  const [drink,setdrink]=useState({
    title:'Red bull',
    price:5
  });
  const handleClick=()=>{
    setdrink({...drink,price:6});
  }
  return (
    <div>
   {/* <ListGroup items={items} heading='Cities' onSelectItem={handleClick}></ListGroup>
   <AiFillChrome></AiFillChrome>
    <Like onClick={()=>{console.log('clicked')}}color='blue'></Like> */}
    {drink.price}
    <button onClick={handleClick}>click here</button>
    </div>
  );
}

export default App;
