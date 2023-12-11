import React, { useState } from 'react';
import { ExpenseForm } from './component/ExpenseForm';
function App(){

  const [expense,setexpense]=useState([])
  const handleAddExpense=(new)=>{
    setexpense([...expense,newExpense])
  }
  return(
    <>
    <ExpenseForm onAddExpense={handleAddExpense}/>
    </>
  )
}
export default App;