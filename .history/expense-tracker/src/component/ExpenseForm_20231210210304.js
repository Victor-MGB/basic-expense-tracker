import React, { useState } from 'react'

export function ExpenseForm({onAddExpense}) {
    const [description,setDescription] = useState('');
    const [amount,setAmount] = useState('');
    const [category,setCategory] = useState('')

    const handleDescription=(e)=>{
        setDescription(e.target.value)
    }

    const handleAmount=(e)=>{
        setAmount(e.target.value)
    }

    const handleCategory =(e)=>{
        setCategory(e.target.value)
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <>
           <form > 
            <label> 
                Description:
                <input type='text' value={description} onChange={handleDescription}> </input>
            </label>

            <label> 
                Amount:
                <input type='text' value={amount} onChange={handleAmount}> </input>
            </label>

            <label> 
                Category:
                <input type='text' value={category} onChange={handleCategory}> </input>
            </label>

            <button > Submit</button>
            </form> 
        </>
    )
}
