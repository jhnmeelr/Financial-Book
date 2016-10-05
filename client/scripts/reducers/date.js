import INITIAL_STATE from './initialState';

const staticStates = (state = INITIAL_STATE.date, action) => {
    let year = state.year;
    let month = state.month;
    switch (action.type) {
    case 'PREVIOUS_MONTH_CLICK':
        month -= 1;
        if (month < 0) {
            month = 11;
            year -= 1;
        }
        return {
            ...state,
            year,
            month
        };
    case 'NEXT_MONTH_CLICK':
        month += 1;
        if (month > 11) {
            month = 0;
            year += 1;
        }
        return {
            ...state,
            year,
            month
        };
    default:
        return state;
    }
};

export default staticStates;
