import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Expandable from './components/Expandable';
import Form from './components/Form';
import ExpenseForm from './ExpenseTracker/components';
import ExpenseFilter from './ExpenseTracker/components/ExpenseFilter';
import ExpenseList from './ExpenseTracker/components/ExpenseList';
import categories from './ExpenseTracker/categories'
import ProductList from './components/ProductList';
import axios from 'axios';
interface user
{
  id:string
  name:string
}
function App () {
const [users,setusers]=useState<user[]>([])
useEffect(()=>{
  axios.get<user[]>("https://jsonplaceholder.typicode.com/users").then(res=>setusers(res.data))
},[])
  return (
    <div>
      <ul>
        {users.map((user)=><li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App