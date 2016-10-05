import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actionCreators';

import App from '../components/App';

const mapStateToProps = (state) => ({
    staticStates: state.staticStates,
    date: state.date,
    currency: state.currency
});

const mapDispatchToProps = (dispatch) => ({
    addExpenseNote: bindActionCreators(ActionCreators.addExpenseNote, dispatch),
    addIncomeNote: bindActionCreators(ActionCreators.addIncomeNote, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);