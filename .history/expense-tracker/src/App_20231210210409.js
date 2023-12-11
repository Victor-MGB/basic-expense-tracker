import React from 'react';
import { ExpenseForm } from './component/ExpenseForm';
function App(){
  return(
    <>
    <ExpenseForm onAddExpense={handleAddExpense}/>
    </>
  )
}
export default App;