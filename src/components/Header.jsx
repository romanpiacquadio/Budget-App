import React from 'react'
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget, validBudget, setValidBudget}) => {
  return (
    <header>
        <h1>Expense controller</h1>
        
        {validBudget ? (
            <p>Control Presupuesto</p>
        ) : (
            <NewBudget budget={budget} setBudget={setBudget} setValidBudget={setValidBudget}/>
        )}
    </header>
  )
}

export default Header