import React from 'react';

import DateSwitcher from '../containers/DateSwitcherContainer';

const Main = ({
    date,
    currency,

    expenseCategories,
    incomeCategories,

    expensesClick,
    incomesClick,
    addExpenseClick,
    addIncomeClick
}) => {
    const sumBalance = (currentBalance, categories, date) => {
        for (let i=0; i < categories.length; i++) {
            let sum = 0;
            for (let j=0; j < categories[i].subCategories.length; j++) {
                for (let k=0; k < categories[i].subCategories[j].notes.length; k++) {
                    for (let key in categories[i].subCategories[j].notes[k]) {
                        if (key === 'value' && categories[i].subCategories[j].notes[k].month === date.month && categories[i].subCategories[j].notes[k].year === date.year) {
                            sum += categories[i].subCategories[j].notes[k][key];
                        }
                    }
                }
            }
            currentBalance += sum;
        }
        return currentBalance;
    }

    const balanceDecimalFix = (balance) => {
        return balance ? balance = balance.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : 0;
    }

    let expensesBalance = 0;
    let incomesBalance = 0;
    expensesBalance = sumBalance(expensesBalance, expenseCategories, date);
    incomesBalance = sumBalance(incomesBalance, incomeCategories, date);

    let totalBalance = incomesBalance - expensesBalance;

    let totalBalanceStyle;
    if (totalBalance < 0) {
        totalBalanceStyle = {
            'color': '#e34661'
        };
    }

    expensesBalance = balanceDecimalFix(expensesBalance);
    incomesBalance = balanceDecimalFix(incomesBalance);
    totalBalance = balanceDecimalFix(totalBalance);

    let expDigitsAmount = expensesBalance.toString().replace('.', '').length;
    let incDigitsAmount = incomesBalance.toString().replace('.', '').length;
    let totalDigitsAmount = totalBalance.toString().replace('.', '').length;
    let expFontSize = 60;
    let incFontSize = 60;

    if (expDigitsAmount > 8) {
        expFontSize = 50;
    } if (expDigitsAmount > 9) {
        expFontSize = 45;
    } if (expDigitsAmount > 11) {
        expensesBalance = expensesBalance.substring(0, 10) + ' ... ';
    }

    if (incDigitsAmount > 8) {
        incFontSize = 50;
    } if (incDigitsAmount > 9) {
        incFontSize = 45;
    } if (incDigitsAmount > 11) {
        incomesBalance = incomesBalance.substring(0, 10) + ' ... ';
    }

    if (totalDigitsAmount > 14) {
        totalBalance = totalBalance.substring(0, 10) + ' ... ';
        if (totalBalance.includes('-')) {
            totalBalanceStyle = {
                'color': '#e34661'
            };
        }
    }

    return (
        <div className="main-wrap">
            <DateSwitcher date={date} />
            <section className="expenses" onClick={expensesClick} >
                <h3>Expenses</h3>
                <div className="value" style={{ 'fontSize': expFontSize }} ><span className="icon icon-currence">{currency.activeSymbol}</span>{expensesBalance}</div>
            </section>
            <section className="incomes" onClick={incomesClick} >
                <h3>Incomes</h3>
                <div className="value" style={{ 'fontSize': incFontSize }} ><span className="icon icon-currence">{currency.activeSymbol}</span>{incomesBalance}</div>
            </section>
            <section className="balance">
                <div>Balance: <span className="total-value" style={totalBalanceStyle} ><span className="icon icon-currence">{currency.activeSymbol}</span>{totalBalance}</span></div>
            </section>
            <div className="add-new-note minus" onClick={addExpenseClick}><span></span></div>
            <div className="add-new-note plus" onClick={addIncomeClick}><span></span><span></span></div>
        </div>
    );
};

export default Main;