import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actionCreators';

import Main from '../components/Main';

const mapStateToProps = (state) => ({
    expenseCategories: state.expenseCategories,
    incomeCategories: state.incomeCategories
});

const mapDispatchToProps = (dispatch) => ({
    expensesClick: bindActionCreators(ActionCreators.expensesClick, dispatch),
    incomesClick: bindActionCreators(ActionCreators.incomesClick, dispatch),
    addExpenseClick: bindActionCreators(ActionCreators.addExpenseClick, dispatch),
    addIncomeClick: bindActionCreators(ActionCreators.addIncomeClick, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);