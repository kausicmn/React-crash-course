import React from 'react'
import { FieldValues,useForm } from 'react-hook-form'
import ExpenseList from './ExpenseList'
import categories from '../categories'
import {Schema, number, z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema=z.object({
    description:z.string().min(3,{message:'Description Should be atleast 3 characters'}).max(50),
    amount:z.number({invalid_type_error:'Amount is required'}).min(0.01).max(100_000),
    category:z.enum(categories,{errorMap:()=>({message:'Category is required'})})
})
type FormData=z.infer<typeof schema>;
interface Props{
onSubmit:(data:FormData)=>void;
}
const ExpenseForm = ({onSubmit}:Props) => {
    const {register,handleSubmit,formState:{errors},reset}=useForm<FormData>({resolver:zodResolver(schema)})
  return (
    <form onClick={handleSubmit(data=>{
        onSubmit(data),reset();
    })}>
    <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input {...register('description')} type="text" className="form-control" />
        {errors.description&&<p className='text-danger'>{errors.description.message}</p>}
    </div>
    <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input {...register('amount',{valueAsNumber:true})}type="number" className="form-control" />
        {errors.amount&&<p className='text-danger'>{errors.amount.message}</p>}
    </div>
    <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select className="form-select" aria-label="Default select example" {...register('category')}defaultValue=''>
        <option value=" "></option>
        {categories.map(category=><option key={category} value={category}>{category}</option>)}
        </select>
        {errors.category&&<p className='text-danger'>{errors.category.message}</p>}
    </div>
    <button className="btn btn-primary"> Submit</button>
    </form>
  )
}

export default ExpenseForm