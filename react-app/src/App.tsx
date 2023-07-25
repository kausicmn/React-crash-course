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
import axios, { AxiosError, CanceledError } from 'axios';
interface user
{
  id:string
  name:string
}
function App () {
const [users,setusers]=useState<user[]>([]);
const [error,seterror]=useState('');
useEffect(()=>{
    const controller=new AbortController();
    axios.get<user[]>("https://jsonplaceholder.typicode.com/users",{signal:controller.signal})
    .then(res=>setusers(res.data)).catch((err)=>
      {
        if(err instanceof CanceledError) return;
        seterror(err.message);
    });
    return () => controller.abort();
},[])
  return (
    <>
    {error&&<p className='text-danger'>{error}</p>}
    <div>
      <ul>
        {users.map((user)=><li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
    </>
  )
}

export default App