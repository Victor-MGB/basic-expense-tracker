import React, { useState } from 'react';
import { ExpenseForm } from './component/ExpenseForm';
function App(){

  const [expenses,setexpenses]=useState([])
  const handleAddExpense=(newExpense)=>{
    setexpenses([...expenses,newExpense])
  }
  return(
    <>
    <ExpenseForm onAddExpense={handleAddExpense}/>
    </>
  )
}
export default App;