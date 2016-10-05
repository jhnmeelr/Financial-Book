const INITIAL_STATE = {
    staticStates: {
        Header: {
            heading: 'Financial Book'
        },
        Main: {
            isActive: true,
            isFolded: false
        },
        Settings: {
            isActive: false,
            isBack: false,
            isFolded: false,
            isWaiting: true,
            isReseting: false
        },
        List: {
            isActive: false,
            isBack: false,
            isFolded: false,
            isWaiting: true,
        },
        NewNote: {
            isActive: false,
            isBack: false,
            isWaiting: true,
        },
        prevComponent: ''
    },
    expenseCategories: [],
    incomeCategories: [],
    date: {
        year: (new Date).getUTCFullYear(),
        month: (new Date).getUTCMonth()
    },
    currency: {
        activeSymbol: '$',
        currencies: [
            {
                currencyName: 'USA dollar',
                currencySymbol: '$',
                isActive: true
            },
            {
                currencyName: 'Euro',
                currencySymbol: '€',
                isActive: false
            },
            {
                currencyName: 'Ukrainian hryvnia',
                currencySymbol: '₴',
                isActive: false
            }
        ]
    }
};

export default INITIAL_STATE;
