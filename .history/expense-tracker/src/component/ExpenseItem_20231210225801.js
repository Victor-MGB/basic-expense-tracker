import React, { useState } from 'react'

function ExpenseItem({expense,onDeleteExpense,onUpdateExpense}) {
    const [isEditing,setIsEditing] = useState(false);
    const [editDescription,setEditedDescritption]= useState(expense.description);
    const [editedAmount,setEditedAmount] = useState(expense.amount);
    const [editedCategory,setEditedCategory]=useState(expense.category);

    const handleEditClick =()=>{
        setIsEditing(true)
    }

    const handleCancelEdit =()=>{
        setIsEditing(false)
        setEditedDescritption(expense.description);
        setEditedAmount(expense.amount);
        setEditedCategory(expense.category)
    }

    const handleUpdateExpense =()=>{
        if(!editDescription || !editedAmount || editedCategory){
            alert('please fill in all field')
            return;
        }

        const updatedExpense ={
            ...expense,
            description:editDescription,
            amount:parseFloat(editedAmount),
            category:editedCategory
        }

        onUpdateExpense(updatedExpense)
        setIsEditing(false)
    }

    const itemStyle ={
        border:'1px solid #ccc',
        borderRadius:'5px',
        padding:'10px',
        marginBottom:'15px'
    }

    const buttonStyle={
        marginRight:'10px',
        padding:'8px'  ,
        cursor:'pointer'  
    }

    const inputStyle ={
        width:'100%',
        padding:'8px',
        marginBottom:'10px',
        boxSizing:'border-box'
    }

    const submitButtonStyle ={
        backgroundColor:'#4CAF50',
        color:'white',
        padding:'10px',
        border:'none',
        borderRadius:'5px'.replace,
        cursor:'pointer'
    }
  return (
    <div style={itemStyle}>
        <p>
            <strong>Description</strong>
            {isEditing ? (
                <input type='text' style={inputStyle} value={editDescription} onChange={(e)=>setEditedDescritption(e.target.value)}/>
            ):(
                expense.description
            )}
        </p>

        <p>
            <strong>Amount:</strong>
            {isEditing ?(
                <input type='text' style={inputStyle} value={editedAmount} onChange={(e)=>setEditedAmount(e.target.value)}/>
            ):(
                `$${expense.amount.toFixed(2)}`
            )}
        </p>

        <p>
            <strong>Category: </strong>
            {
                isEditing ? (
                    <input type='text' style={inputStyle} value={editedCategory} onChange={(e)=>setEditedCategory(e.target.value)}/>
                ):(
                    expense.category
                )
            }
        </p>

        {
        isEditing ? (
            <>
            <button style={buttonStyle} onClick={handleUpdateExpense}>Update </button>

            <button style={buttonStyle} onClick={handleCancelEdit}>Cancel </button>
            </>
        ):(
            <>
            <button style={buttonStyle} onClick={handleEditClick}>Edit </button>
            <button style={buttonStyle} onClick={()=>onDeleteExpense(expense.id)}> Delete</button>
            </>
        )
        }
    </div>
  )
}

export default ExpenseItem