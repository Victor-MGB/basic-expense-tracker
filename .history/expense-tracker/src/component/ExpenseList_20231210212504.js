import React from 'react'

function ExpenseList({expense}) {
  return (
    <div>
        <h2>Expense List</h2>
        <ul>
            {
                expense.map((expense)=>(
                    <li></li>
                ))
            }
        </ul>
    </div>
  )
}

export default ExpenseList