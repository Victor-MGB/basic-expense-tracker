import React, { useState } from 'react';
import { ExpenseForm } from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';
function App(){

  const [expense,setExpense]=useState([])
  const handleAddExpense=(newExpense)=>{
    setExpense([...expense,newExpense])
  }
  return(
    <>
    <ExpenseForm onAddExpense={handleAddExpense}/>
    <ExpenseList/>
    </>
  )
}
export default App;