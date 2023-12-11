import React, { useState } from 'react'

function ExpenseItem() {
    const [isEditing,setIsEditing] = useState(false);
  return (
    <div>
        <p>
            <strong>Description</strong>
            {isEditing ? (
                <input type='text' value={edit}> </input>
            )}
        </p>
    </div>
  )
}

export default ExpenseItem