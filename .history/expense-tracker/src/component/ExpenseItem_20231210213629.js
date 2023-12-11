import React, { useState } from 'react'

function ExpenseItem() {
    const [isEditing,setIsEditing] = useState(false);
  return (
    <div>
        <p>
            <strong>Description</strong>
            {is}
        </p>
    </div>
  )
}

export default ExpenseItem