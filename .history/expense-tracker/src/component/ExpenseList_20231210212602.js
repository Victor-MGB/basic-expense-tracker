import React from 'react'

function ExpenseList({expense}) {
  return (
    <div>
        <h2>Expense List</h2>
        <ul>
            {
                expense.map((expense)=>(
                    <li key={expense.id}>
                        <strong>{expense.description}</strong>
                        <p> Amount{expense.amount}</p>
                        
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ExpenseList