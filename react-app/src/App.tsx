import { useState } from "react";
import ListGroup from "./components/ListGroup";
import {AiFillChrome} from "react-icons/ai"
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
    </div>
  );
}

export default App;
