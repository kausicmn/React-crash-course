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
  const [tags,setTags]=useState(['happy','cheerful']);
  const handleClick=()=>{
    setTags([...tags,'sad']); //add
    setTags(tags.filter(tag=>tag!=='happy')); //remove
    setTags(tags.map(tag=>tag==='happy'?'happiness':tag));

  }
  return (
    <div>
   {/* <ListGroup items={items} heading='Cities' onSelectItem={handleClick}></ListGroup>
   <AiFillChrome></AiFillChrome>
    <Like onClick={()=>{console.log('clicked')}}color='blue'></Like> */}
    {/* {drink.price}{drink.location.zipcode} */}
    {tags}
    <button onClick={handleClick}>click here</button>
    </div>
  );
}

export default App;
