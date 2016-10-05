import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actionCreators';

import Header from '../components/Header';

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    settingsClick: bindActionCreators(ActionCreators.settingsClick, dispatch),
    settingsBackClick: bindActionCreators(ActionCreators.settingsBackClick, dispatch),

    expensesListBackClick: bindActionCreators(ActionCreators.expensesListBackClick, dispatch),
    incomesListBackClick: bindActionCreators(ActionCreators.incomesListBackClick, dispatch),

    listExpensesAddNewNoteClick: bindActionCreators(ActionCreators.listExpensesAddNewNoteClick, dispatch),
    listIncomesAddNewNoteClick: bindActionCreators(ActionCreators.listIncomesAddNewNoteClick, dispatch),

    newExpenseNoteBackToMainClick: bindActionCreators(ActionCreators.newExpenseNoteBackToMainClick, dispatch),
    newIncomeNoteBackToMainClick: bindActionCreators(ActionCreators.newIncomeNoteBackToMainClick, dispatch),
    newExpenseNoteBackToListClick: bindActionCreators(ActionCreators.newExpenseNoteBackToListClick, dispatch),
    newIncomeNoteBackToListClick: bindActionCreators(ActionCreators.newIncomeNoteBackToListClick, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);