import React, { useState } from 'react'
interface Expense{
  id:number
  description:string
  amount:number
  category:string
}
interface Props
{
    expenses:Expense[]
    onDelete:(id:number)=>void  
}
// const [list,setList]=useState([])
const ExpenseList = ({expenses,onDelete}:Props) => {
  if(expenses.length===0) return null;
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
    {expenses.map(data=><tr key={data.id}><td>{data.description}</td><td>{data.amount}</td><td>{data.category}</td><td><button className="btn btn-outline-danger" onClick={()=>onDelete(data.id)}>Delete</button></td></tr>)}
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>${expenses.reduce((acc,expense)=>expense.amount+acc,0).toFixed(2)}</td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</table>
  )
}

export default ExpenseList