import { useState } from "react";
import ListGroup from "./components/ListGroup";
import {AiFillChrome} from "react-icons/ai"
import Like from "./components/Like/Like";
import produce from 'immer'
// import Button from "./components/Button";
let items=["New york","SF","Chennai",'Chicago']
// const handleClick=(item:String)=>{
//   console.log(item)
// }
function App() {
  const [alertVisible,setAlertVisibility]=useState(false);
  const [tags,setTags]=useState([{id:1,title:'Bug1',fixed:true},{id:2,title:'Bug2',fixed:false}]);
  const handleClick=()=>{
    // setTags(tags.map(tags=>tags.id===1?{...tags,fixed:false}:tags));
    setTags(produce(draft=>{
      const bug=draft.find(tags=>tags.id===1);
      if(bug) bug.fixed=false;

    }))
  }
  return (
    <div>
      {tags.map(tags=><p>{tags.title} cc{tags.id} {tags.fixed}</p>)}
    <button onClick={handleClick}>click here</button>
    </div>
  );
}

export default App;
