import { useState } from "react";
import ListGroup from "./components/ListGroup";
import {AiFillChrome} from "react-icons/ai"
import Like from "./components/Like/Like";
let items=["New york","SF","Chennai",'Chicago']
const handleClick=(item:String)=>{
  console.log(item)
}
function App() {
  const [alertVisible,setAlertVisibility]=useState(false);
  return (
    <div>
   <ListGroup items={items} heading='Cities' onSelectItem={handleClick}></ListGroup>
   <AiFillChrome></AiFillChrome>
    <Like onClick={()=>{console.log('clicked')}}color='blue'></Like>
    </div>
  );
}

export default App;
