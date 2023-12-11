import React, { useState } from 'react'

function ExpenseItem({expense,onDeleteExpense,onUpdateExpense}) {
    const [isEditing,setIsEditing] = useState(false);
    const [editDescription,setEditedDescritption]= useState(expense.description);
    const [editedAmount,setEditedAmount] = useState(expense.amount);
    const [editedCategory,setEditedCategory]=useState(expense.category);
  return (
    <div>
        <p>
            <strong>Description</strong>
            {isEditing ? (
                <input type='text' value={editDescription} onChange={(e)=>setEditedDescritption(e.target.value)}/>
            ):(
                expense.description
            )}
        </p>

        <p>
            <strong>Amount:</strong>
            {isEditing ?(
                <input type='text' value={editedAmount} onChange={(e)=>setEditedAmount(e.target.value)}/>
            ):(
                `$${expense.amount.toFixed(2)}`
            )}
        </p>

        <p>
            <strong>Category: </strong>
            {
                isEditing ? (
                    <input type='text' value={editedCategory} onChange={(e)=>setEditedCategory(e.target.value)}/>
                ):(
                    expense.category
                )
            }
        </p>

        {
        isEditing ? (
            <>
            <button onClick={handleUpdateExpense}>Update </button>

            <button onClick={handleCan}> </button>
            </>
        )
        }
    </div>
  )
}

export default ExpenseItem