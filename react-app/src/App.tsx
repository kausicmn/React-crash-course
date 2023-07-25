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

function App () {
  const[categrory,setcategory]= useState('')
  return (
    <div>
      <ProductList category={categrory}></ProductList>
      <select className='form-select' onChange={(event)=>setcategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
    </div>
  )
}

export default App