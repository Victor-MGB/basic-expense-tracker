import React from 'react'

function ExpenseList({expense}) {
  return (
    <div>
        <h2>Expense List</h2>
        <ul>
            {
                expense.map((expense)=>(
                    <li key={expense.id}>
                        <strong>{expense.}</strong>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ExpenseList