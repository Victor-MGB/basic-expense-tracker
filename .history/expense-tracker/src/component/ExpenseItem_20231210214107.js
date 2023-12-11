import React, { useState } from 'react'

function ExpenseItem({expense.onDeleteExpense}) {
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
    </div>
  )
}

export default ExpenseItem