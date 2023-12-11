import React, { useState } from 'react';
import { ExpenseForm } from './component/ExpenseForm';
function App(){

  const [expense,setExpense]=useState([])
  const handleAddExpense=(newExpense)=>{
    setExpense([...expense,newExpense])
  }
  return(
    <>
    <ExpenseForm onAddExpense={handleAddExpense}/>
    </>
  )
}
export default App;