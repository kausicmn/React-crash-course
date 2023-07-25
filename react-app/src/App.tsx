import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Expandable from "./components/Expandable";
import Form from "./components/Form";
import ExpenseForm from "./ExpenseTracker/components";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import categories from "./ExpenseTracker/categories";
import ProductList from "./components/ProductList";
import apiClient, { CanceledError } from "./services/api-client";
import userService ,{user} from "./services/user-service"
function App() {
  const [users, setusers] = useState<user[]>([]);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
   const {response,cancel}=userService.getalluser();
   response.then((res) => {
        setusers(res.data);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        seterror(err.message);
        setloading(false);
      });
    return () => cancel();
  }, []);
  const onclick = (user: user) => {
    const before = [...users];
    setusers(users.filter((u) => u.id != user.id));
    userService.deleteuser(user.id).catch((err) => {
        seterror(err.message);
        setusers(before);
      });
  };
const add = ()=>{
  const orignal = [...users];
  const newuser={
    id:'13',
    name:'kausic'
  };
  setusers([newuser,...users]);
 userService.add(newuser).then(res=>(setusers([res.data,...users]))).catch((err)=>{
    seterror(err.message);
    setusers(orignal);
  })  
}
const update=(user:user)=>{
  const orignal = [...users];
  const upadateduser={...user,name: user.name +'!'}
  setusers(users.map(u=>u.id==user.id?upadateduser:u))
  userService.update(upadateduser).catch((err)=>{
    seterror(err.message);
    setusers(orignal);
  })  
  }
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <div>
        <ul className="list-group">
        <button
                className="btn btn-outline-primary"
                onClick={add}
              >
              Add
              </button>
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
              <button
                className="btn btn-secondary mx-1"
                onClick={() => update(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => onclick(user)}
              >
                Delete
              </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
