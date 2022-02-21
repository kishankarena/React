import React from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expeneseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expeneseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;