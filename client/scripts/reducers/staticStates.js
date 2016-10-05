import INITIAL_STATE from './initialState';

const staticStates = (state = INITIAL_STATE.staticStates, action) => {
    switch (action.type) {
    case 'SETTINGS_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Settings'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: true,
                isBack: false,
                isFolded: false,
                isWaiting: false
            },
            List: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            NewNote: {
                isActive: false,
                isBack: false,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'Main'
        };
    case 'SETTINGS_BACK_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Financial Book'
            },
            Main: {
                isActive: true,
                isBack: false,
                isFolded: false,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: true,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            NewNote: {
                isActive: false,
                isBack: false,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'Main'
        };
    case 'EXPENSES_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Expenses'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: true,
                isBack: false,
                isFolded: false,
                isWaiting: false
            },
            NewNote: {
                isActive: false,
                isBack: false,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'Main'
        };
    case 'INCOMES_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Incomes'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: true,
                isBack: false,
                isFolded: false,
                isWaiting: false,
            },
            NewNote: {
                isActive: false,
                isBack: false,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'Main'
        };
    case 'ADD_EXPENSE_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Add Expense'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true,
                heading: ''
            },
            NewNote: {
                isActive: true,
                isBack: false,
                isFolded: null,
                isWaiting: false,
            },
            prevComponent: 'Main'
        };
    case 'ADD_INCOME_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Add Income'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true,
            },
            NewNote: {
                isActive: true,
                isBack: false,
                isFolded: null,
                isWaiting: false,
            },
            prevComponent: 'Main'
        };
    case 'EXPENSES_LIST_BACK_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Financial Book'
            },
            Main: {
                isActive: true,
                isBack: null,
                isFolded: false,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: true,
                isFolded: false,
                isWaiting: true,
            },
            NewNote: {
                isActive: false,
                isBack: false,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'ExpensesList'
        };
    case 'INCOMES_LIST_BACK_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Financial Book'
            },
            Main: {
                isActive: true,
                isBack: null,
                isFolded: false,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: true,
                isFolded: false,
                isWaiting: true,
            },
            NewNote: {
                isActive: false,
                isBack: false,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'IncomesList'
        };
    case 'LIST_EXPENSES_ADD_NEW_NOTE_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Add Expense'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: false,
                isFolded: true,
                isWaiting: false,
            },
            NewNote: {
                isActive: true,
                isBack: false,
                isFolded: null,
                isWaiting: false,
            },
            prevComponent: 'ExpensesList'
        };
    case 'LIST_INCOMES_ADD_NEW_NOTE_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Add Income'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: false,
                isFolded: true,
                isWaiting: false,
            },
            NewNote: {
                isActive: true,
                isBack: false,
                isFolded: null,
                isWaiting: false,
            },
            prevComponent: 'IncomesList'
        };
    case 'NEW_EXPENSE_NOTE_BACK_TO_MAIN_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Financial Book'
            },
            Main: {
                isActive: true,
                isBack: null,
                isFolded: false,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true,
            },
            NewNote: {
                isActive: false,
                isBack: true,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'NewExpenseNote'
        };
    case 'NEW_INCOME_NOTE_BACK_TO_MAIN_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Financial Book'
            },
            Main: {
                isActive: true,
                isBack: null,
                isFolded: false,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true,
            },
            NewNote: {
                isActive: false,
                isBack: true,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'NewIncomeNote'
        };
    case 'NEW_EXPENSE_NOTE_BACK_TO_LIST_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Expenses'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: true,
                isBack: false,
                isFolded: false,
                isWaiting: false,
            },
            NewNote: {
                isActive: false,
                isBack: true,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'NewExpenseNote'
        };
    case 'NEW_INCOME_NOTE_BACK_TO_LIST_CLICK':
        return {
            ...state,
            Header: {
                heading: 'Incomes'
            },
            Main: {
                isActive: false,
                isBack: null,
                isFolded: true,
                isWaiting: null
            },
            Settings: {
                isActive: false,
                isBack: false,
                isFolded: false,
                isWaiting: true
            },
            List: {
                isActive: true,
                isBack: false,
                isFolded: false,
                isWaiting: false,
            },
            NewNote: {
                isActive: false,
                isBack: true,
                isFolded: null,
                isWaiting: true,
            },
            prevComponent: 'NewIncomeNote'
        };
    default:
        return state;
    }
};

export default staticStates;
