import React, { useState } from 'react'

function ExpenseItem() {
    const [isEditing,setIsEditing] = useState(false);
  return (
    <div>
        <p>
            <strong>Description</strong>
            {isEditing ? (
                <input type='text' value={editDescription} onChange={(e)=>setEd}> </input>
            )}
        </p>
    </div>
  )
}

export default ExpenseItem