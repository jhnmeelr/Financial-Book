import { combineReducers } from 'redux';

import staticStates from './staticStates';
import date from './date';
import currency from './currency';
import expenseCategories from './expenseCategories';
import incomeCategories from './incomeCategories';

const rootReducer = combineReducers({
    staticStates,
    date,
    currency,
    expenseCategories,
    incomeCategories
});

export default rootReducer;