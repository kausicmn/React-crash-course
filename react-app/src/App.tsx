import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
let buttons=["btn-primary","btn-secondary","btn-success",'btn-danger']
function App() {
  const [alertVisible,setAlertVisibility]=useState(false);
  return (
    <div>
    {alertVisible&& <Alert onClose={()=>setAlertVisibility(false)}> My alert</Alert>}
    <Button onClick={()=>setAlertVisibility(true)}>My label</Button>
   
    </div>
  );
}

export default App;
