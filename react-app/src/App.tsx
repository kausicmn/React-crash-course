import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Expandable from './components/Expandable';
import Form from './components/Form';
import ExpenseForm from './ExpenseTracker/components';
import ExpenseFilter from './ExpenseTracker/components/ExpenseFilter';
import ExpenseList from './ExpenseTracker/components/ExpenseList';
import categories from './ExpenseTracker/categories'

function App () {
 const[selectedcategory,setSelectedCategory]=useState('');
 const [expenses,setExpenses]=useState([{id:1,description:'aa',amount:10,category:'Utilities'},
 {id:2,description:'aa',amount:10,category:'Utilities'},
 {id:3,description:'aa',amount:10,category:'Utilities'},
 {id:4,description:'aa',amount:10,category:'Groceries'}])
 const visibleexpenses=selectedcategory?expenses.filter(e=>e.category===selectedcategory):expenses;
  return (
    <><div className='mb-5'><ExpenseForm onSubmit={data=>setExpenses([...expenses,{...data,id:expenses.length+1}])}/> </div>
    <div className='mb-3'><ExpenseFilter onSelectCategory={(category)=>setSelectedCategory(category)}></ExpenseFilter></div>
    <ExpenseList expenses={visibleexpenses} onDelete={(id)=>setExpenses(expenses.filter(e=>e.id!==id))}></ExpenseList>
    </>
  )
}

export default App