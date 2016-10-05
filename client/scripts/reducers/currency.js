import INITIAL_STATE from './initialState';

const currency = (state = INITIAL_STATE.currency, action) => {
    switch (action.type) {
    case 'CHANGE_CURRENCY':
        return {
            ...state,
            activeSymbol: action.payload.activeSymbol
        };
    case 'RESET_DATA':
        return {
            ...state,
            activeSymbol: '$'
        };
    default:
        return state;
    }
};

export default currency;
