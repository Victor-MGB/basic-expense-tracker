import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({expense,onDeleteExpense,onUpdateExpense}) {

    const headerStyle ={
        fontSize:'1.5rem',
        marginBottom:'10px'
    }

    const listStyle={
        maxWidth:'600px',
        margin:'auto',
        padding:'20px',
        border:'1px solid #ccc',
        borderRadius:'5px'
    }
  return (
    <div style={listStyle}>
        <h2 style={headerStyle}>Expense List</h2>
        <ul>
            {
                expense.map((expense)=>(
                    <li key={expense.id} style={{marginBottom:'1'}}>
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