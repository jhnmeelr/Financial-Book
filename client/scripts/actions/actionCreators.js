import uuid from 'uuid';

export const previousMonthClick = () => ({
    type: 'PREVIOUS_MONTH_CLICK'
});

export const nextMonthClick = () => ({
    type: 'NEXT_MONTH_CLICK'
});

export const settingsClick = () => ({
    type: 'SETTINGS_CLICK'
});

export const settingsBackClick = () => ({
    type: 'SETTINGS_BACK_CLICK'
});

export const resetData = () => ({
    type: 'RESET_DATA'
});

export const expensesClick = () => ({
    type: 'EXPENSES_CLICK'
});

export const incomesClick = () => ({
    type: 'INCOMES_CLICK'
});

export const addExpenseClick = () => ({
    type: 'ADD_EXPENSE_CLICK'
});

export const addIncomeClick = () => ({
    type: 'ADD_INCOME_CLICK'
});

export const expensesListBackClick = () => ({
    type: 'EXPENSES_LIST_BACK_CLICK'
});

export const incomesListBackClick = () => ({
    type: 'INCOMES_LIST_BACK_CLICK'
});

export const listExpensesAddNewNoteClick = () => ({
    type: 'LIST_EXPENSES_ADD_NEW_NOTE_CLICK'
});

export const listIncomesAddNewNoteClick = () => ({
    type: 'LIST_INCOMES_ADD_NEW_NOTE_CLICK'
});

export const newExpenseNoteBackToMainClick = () => ({
    type: 'NEW_EXPENSE_NOTE_BACK_TO_MAIN_CLICK'
});

export const newIncomeNoteBackToMainClick = () => ({
    type: 'NEW_INCOME_NOTE_BACK_TO_MAIN_CLICK'
});

export const newExpenseNoteBackToListClick = () => ({
    type: 'NEW_EXPENSE_NOTE_BACK_TO_LIST_CLICK'
});

export const newIncomeNoteBackToListClick = () => ({
    type: 'NEW_INCOME_NOTE_BACK_TO_LIST_CLICK'
});

export const addExpenseNote = (categoryName, subCategoryName, value, month, year) => ({
    type: 'ADD_EXPENSE_NOTE',
    payload: {
        id: uuid.v4(),
        categoryName,
        subCategoryName,
        value,
        month,
        year
    }
});

export const addIncomeNote = (categoryName, subCategoryName, value, month, year) => ({
    type: 'ADD_INCOME_NOTE',
    payload: {
        id: uuid.v4(),
        categoryName,
        subCategoryName,
        value,
        month,
        year
    }
});

export const deleteCategoryItemClick = (id) => ({
    type: 'DELETE_CATEGORY_ITEM_CLICK',
    payload: {
        id
    }
});

export const deleteSubCategoryItemClick = (categoryId, subCategoryId) => ({
    type: 'DELETE_SUBCATEGORY_ITEM_CLICK',
    payload: {
        categoryId,
        subCategoryId
    }
});

export const changeCurrency = (activeSymbol) => ({
    type: 'CHANGE_CURRENCY',
    payload: {
        activeSymbol
    }
});