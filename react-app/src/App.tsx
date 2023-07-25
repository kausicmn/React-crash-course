import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Expandable from './components/Expandable';
import Form from './components/Form';
import ExpenseForm from './ExpenseTracker/components';
import ExpenseFilter from './ExpenseTracker/components/ExpenseFilter';
import ExpenseList from './ExpenseTracker/components/ExpenseList';
import categories from './ExpenseTracker/categories'

function App () {
  const ref=useRef<HTMLInputElement>(null)
  useEffect(()=>{
    if (ref.current)
    {
      ref.current.focus()
    }
  })
  useEffect(()=>{
    document.title='my-app'
  })
  return (
    <div>
      <input type='text' className='form-control'></input>
    </div>
  )
}

export default App