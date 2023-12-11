import React from 'react'

export function ExpenseForm({onAddExpense}) {
    

    return (
        <>
           <form> 
            <label> 
                Description:
                <input type='text' value={description} onChange={handleDescription}> </input>
            </label>

            <label> 
                <input type='text' value={amount} onChange={}> </input>
            </label>
            </form> 
        </>
    )
}
