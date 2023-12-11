import React from 'react'

export function ExpenseForm({onAddExpense}) {
    

    return (
        <>
           <form> 
            <label> 
                Description:
                <input type='text' value={descri}> </input>
            </label>
            </form> 
        </>
    )
}
