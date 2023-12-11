import React, { useState } from 'react';
import { ExpenseForm } from './component/ExpenseForm';
function App(){

  const [expense,setxpense]=useState([])
  const handleAddExpense=(newExpense)=>{
    setexpense([...expense,newExpense])
  }
  return(
    <>
    <ExpenseForm onAddExpense={handleAddExpense}/>
    </>
  )
}
export default App;