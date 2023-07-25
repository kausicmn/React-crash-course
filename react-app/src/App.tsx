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
const connect=()=>{
  console.log('connecting')
}
const disconnect=()=>{
  console.log('disconnecting')
}
function App () {
useEffect(()=>{
  connect();
  return ()=> disconnect();
})
  return (
    <div></div>
  )
}

export default App