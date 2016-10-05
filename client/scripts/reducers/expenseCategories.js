import update from 'react-addons-update';
import INITIAL_STATE from './initialState';

const expenseCategories = (state = INITIAL_STATE.expenseCategories, action) => {
    switch (action.type) {
    case 'ADD_EXPENSE_NOTE':
        return (() => {
            let categoryName = action.payload.categoryName;
            let month = action.payload.month;
            let year = action.payload.year;
            let foundCategory = false;
            let foundCategoryDate = false;
            let i;
            for (i = 0; i < state.length; i++) {
                if (state[i].categoryName == categoryName) {
                    foundCategory = true;
                    if (state[i].month == month && state[i].year == year) {
                        foundCategoryDate = true;
                        break;
                    }
                }
            }
            if (foundCategory && foundCategoryDate) {
                let updatedState = update(state, {[i]: {subCategories: {$push: [{
                    id: action.payload.id,
                    subCategoryName: action.payload.subCategoryName,
                    notes: [
                        {
                            id: action.payload.id,
                            value: action.payload.value,
                            month: action.payload.month,
                            year: action.payload.year,
                        }
                    ]
                }]}}});
                return updatedState;
            } else {
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        month: action.payload.month,
                        year: action.payload.year,
                        categoryName: action.payload.categoryName,
                        subCategories: [
                            {
                                id: action.payload.id,
                                subCategoryName: action.payload.subCategoryName,
                                notes: [
                                    {
                                        id: action.payload.id,
                                        value: action.payload.value,
                                        month: action.payload.month,
                                        year: action.payload.year,
                                    }
                                ]
                            }
                        ]
                    }
                ];
            }
        })();
    case 'DELETE_CATEGORY_ITEM_CLICK':
        return (() => {
            let id = action.payload.id;
            let foundCategory = false;
            let i;
            for (i = 0; i < state.length; i++) {
                if (state[i].id == id) {
                    foundCategory = true;
                    break;
                }
            }
            if (foundCategory) {
                let updatedState = update(state, {$splice: [[i, 1]]});
                return updatedState;
            } else {
                return state;
            }
        })();
    case 'DELETE_SUBCATEGORY_ITEM_CLICK':
        return (() => {
            let categoryId = action.payload.categoryId;
            let subCategoryId = action.payload.subCategoryId;
            let foundCategory = false;
            let foundSubCategory = false;
            let i, j;
            for (i = 0; i < state.length; i++) {
                if (state[i].id == categoryId) {
                    foundCategory = true;
                    break;
                }
            }
            if (foundCategory) {
                for (j = 0; j < state[i].subCategories.length; j++) {
                    if (state[i].subCategories[j].id == subCategoryId) {
                        foundSubCategory = true;
                        break;
                    }
                }
                if (foundSubCategory) {
                    let updatedState = update(state, {[i]: {subCategories: {$splice: [[j, 1]]}}});
                    return updatedState;
                }
            } else {
                return state;
            }
        })();
    case 'RESET_DATA':
        return [];
    default:
        return state;
    }
};

export default expenseCategories;
