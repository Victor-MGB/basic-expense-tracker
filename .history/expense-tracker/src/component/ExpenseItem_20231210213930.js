import React, { useState } from 'react'

function ExpenseItem() {
    const [isEditing,setIsEditing] = useState(false);
    const [editDescription,setEditedDescritption]= useState(expense.description);
    const [editedAmount,setEditedAmount] = useState(expense.amount);
    const [editedCate]
  return (
    <div>
        <p>
            <strong>Description</strong>
            {isEditing ? (
                <input type='text' value={editDescription} onChange={(e)=>setEditedDescritption(e.target.value)}/>
            )}
        </p>
    </div>
  )
}

export default ExpenseItem