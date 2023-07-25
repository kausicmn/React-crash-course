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
import axios, { AxiosError, CanceledError } from "axios";
interface user {
  id: string;
  name: string;
}
function App() {
  const [users, setusers] = useState<user[]>([]);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setloading(true);
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setusers(res.data);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        seterror(err.message);
        setloading(false);
      });
    return () => controller.abort();
  }, []);
  const onclick = (user: user) => {
    const before = [...users];
    setusers(users.filter((u) => u.id != user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
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
  axios.post("https://jsonplaceholder.typicode.com/users/",newuser).then(res=>(setusers([res.data,...users]))).catch((err)=>{
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
              <button
                className="btn btn-outline-danger"
                onClick={() => onclick(user)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
