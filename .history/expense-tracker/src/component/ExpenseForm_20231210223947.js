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

        if(!description || !amount ||!category){
            alert('fill in the field')
            return;

        }

        const newExpense = {
            id:Date.now(),
            description,
            amount:parseFloat(amount),
            category,
        }
    
        onAddExpense(newExpense);

        setDescription('');
        setAmount('');
        setCategory('')
    }

    const formStyle ={
        maxWidth:'400px',
        margin:'auto',
        padding:'20px',
        border:'1px solid '
    }

    return (
        <>
           <form onSubmit={handleSubmit} style={formStyle}> 
            <label> 
                Description:
                <input type='text' value={description} onChange={handleDescription}/>
            </label>

            <label> 
                Amount:
                <input type='text' value={amount} onChange={handleAmount}/>
            </label>

            <label> 
                Category:
                <input type='text' value={category} onChange={handleCategory}/>
            </label>

            <button type='submit'> Submit</button>
            </form> 
        </>
    )
}

