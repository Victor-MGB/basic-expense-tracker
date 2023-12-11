import React, { useState } from 'react';
import { ExpenseForm } from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';
function App(){

  const [expense,setExpense]=useState([])
  const handleAddExpense=(newExpense)=>{
    setExpense([...expense,newExpense])
  }

  const handleDeleteExpense
  return(
    <>
    <ExpenseForm onAddExpense={handleAddExpense}/>
    <ExpenseList expense={expense}
    onDeleteExpense={handleDeleteExpense}
    onUpdateExpense={handleUpdateExpense}/>
    </>
  )
}
export default App;