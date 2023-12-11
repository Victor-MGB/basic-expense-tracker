import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({expense,onDeleteExpense,onUpdateExpense}) {

    const headerStyle ={
        fontSize:'1.5rem',
        marginBottom:'10px'
    }
  return (
    <div>
        <h2>Expense List</h2>
        <ul>
            {
                expense.map((expense)=>(
                    <li key={expense.id}>
                        <ExpenseItem expense={expense}
                        onDeleteExpense={onDeleteExpense}
                        onUpdateExpense={onUpdateExpense}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ExpenseList