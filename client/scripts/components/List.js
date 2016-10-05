import React from 'react';

import ListItem from './ListItem';
import DateSwitcher from '../containers/DateSwitcherContainer';

const List = ({
    date,
    currency,

    heading,
    prevComponent,

    expenseCategories,
    incomeCategories,

    deleteCategoryItemClick,
    deleteSubCategoryItemClick
}) => {
    const arrayOfListItems = (categories, date, belongsTo) => {
        return categories.map((item, i) => {
            if (item.subCategories.length && item.month === date.month && item.year === date.year) {
                return (
                    <ListItem
                        currency={currency}
                        belongsTo={belongsTo}
                        key={i}
                        categoryId={item.id}
                        categoryName={item.categoryName}
                        subCategories={item.subCategories}
                        onDeleteCategoryItemClick={deleteCategoryItemClick}
                        onDeleteSubCategoryItemClick={deleteSubCategoryItemClick} />
                );
            }
        }).sort(
            function(a, b) {
                var categoryNameA = a.props.categoryName.toUpperCase(); // ignore upper and lowercase
                  var categoryNameB = b.props.categoryName.toUpperCase(); // ignore upper and lowercase
                  if (categoryNameA < categoryNameB) {
                    return -1;
                  }
                  if (categoryNameA > categoryNameB) {
                    return 1;
                  }
                  // names must be equal
                  return 0;
            }
        );
    };

    let listItemsContainer = [];
    if (heading === 'Expenses' || prevComponent === 'ExpensesList' || prevComponent === 'NewExpenseNote') {
        listItemsContainer = arrayOfListItems(expenseCategories, date, 'Expenses');
    } else if (heading === 'Incomes' || prevComponent === 'IncomesList' || prevComponent === 'NewIncomeNote') {
        listItemsContainer = arrayOfListItems(incomeCategories, date, 'Incomes');
    }

    let objectInArrayOfListItems;
    for (let i = 0; i < listItemsContainer.length; i++) {
        if (listItemsContainer[i] !== undefined) {
            objectInArrayOfListItems = true;
            break;
        }
    }

    return (
        <div className="list-wrap">
            <DateSwitcher date={date} />
            <ul className="list">
                {objectInArrayOfListItems ? listItemsContainer : <div className="no-records">There are no records for this month</div>}
            </ul>
        </div>
    );
};

export default List;