import React from 'react'

function ExpenseList({expense}) {
  return (
    <div>
        <h2>Expense List</h2>
        <ul>
            {
                expense.map
            }
        </ul>
    </div>
  )
}

export default ExpenseList