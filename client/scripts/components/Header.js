import React from 'react';

const Header = ({
    heading,
    prevComponent,

    settingsClick,
    settingsBackClick,

    expensesListBackClick,
    incomesListBackClick,

    newExpenseNoteBackToMainClick,
    newIncomeNoteBackToMainClick,
    newExpenseNoteBackToListClick,
    newIncomeNoteBackToListClick,

    listExpensesAddNewNoteClick,
    listIncomesAddNewNoteClick,

    onAddNewExpenseNote,
    onAddNewIncomeNote
}) => {
    const leftButton = () => {
        let handleClick;
        if (heading === 'Settings') {
            handleClick = settingsBackClick;
            return (
                <div className="back-button" onClick={handleClick}>
                    <div className="back-button-inner">
                        <span className="icon-back"></span>
                    </div>
                </div>
            );
        } else if (heading === 'Expenses' || heading === 'Incomes') {
            if (heading === 'Expenses') {
                handleClick = expensesListBackClick;
            } else if (heading === 'Incomes') {
                handleClick = incomesListBackClick;
            }
            return (
                <div className="back-button" onClick={handleClick}>
                    <div className="back-button-inner">
                        <span className="icon-back"></span>
                    </div>
                </div>
            );
        } else if (heading === 'Add Expense' || heading === 'Add Income' ) {
            if (prevComponent === 'Main' && heading === 'Add Expense') {
                handleClick = newExpenseNoteBackToMainClick;
            } else if (prevComponent === 'Main' && heading === 'Add Income') {
                handleClick = newIncomeNoteBackToMainClick;
            } else if (prevComponent === 'ExpensesList' && heading === 'Add Expense') {
                handleClick = newExpenseNoteBackToListClick;
            } else if (prevComponent === 'IncomesList' && heading === 'Add Income') {
                handleClick = newIncomeNoteBackToListClick;
            }
            return (
                <div className="back-button" onClick={handleClick} >
                    <div className="back-button-inner">
                        <span className="icon-back"></span>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };
    const rightButton = () => {
        let handleClick;
        if (heading === 'Financial Book') {
            handleClick = settingsClick;
            return (
                <div className="settings-button" onClick={handleClick}>
                    <span></span>
                </div>
            );
        } else if (heading === 'Expenses' || heading === 'Incomes') {
            if (heading === 'Expenses') {
                handleClick = listExpensesAddNewNoteClick;
            } else if (heading === 'Incomes') {
                handleClick = listIncomesAddNewNoteClick;
            }
            return (
                <div className="add-button" onClick={handleClick} >
                    <span></span>
                    <span></span>
                </div>
            );
        } else if (heading === 'Add Expense' || heading === 'Add Income' ) {
            if (heading === 'Add Expense') {
                handleClick = onAddNewExpenseNote;
            } else if (heading === 'Add Income') {
                handleClick = onAddNewIncomeNote;
            }
            return (
                <div className="done-button" onClick={handleClick} >
                    <div className="done-button-inner">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };
    return (
        <header>
            {leftButton()}
            <h1>{heading}</h1>
            {rightButton()}
        </header>
    );
};

export default Header;