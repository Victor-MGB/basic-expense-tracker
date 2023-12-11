import React from 'react';
import { ExpenseForm } from './component/ExpenseForm';
function App(){
  return(
    <>
    <ExpenseForm onAddExpense={hand}/>
    </>
  )
}
export default App;