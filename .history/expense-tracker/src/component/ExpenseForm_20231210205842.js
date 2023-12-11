import React from 'react'

export function ExpenseForm({onAddExpense}) {
    const [description]
    

    return (
        <>
           <form> 
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
            </form> 
        </>
    )
}
