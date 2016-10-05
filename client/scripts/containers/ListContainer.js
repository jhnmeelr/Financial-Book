import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actionCreators';

import List from '../components/List';

const mapStateToProps = (state) => ({
    expenseCategories: state.expenseCategories,
    incomeCategories: state.incomeCategories
});

const mapDispatchToProps = (dispatch) => ({
    deleteCategoryItemClick: bindActionCreators(ActionCreators.deleteCategoryItemClick, dispatch),
    deleteSubCategoryItemClick: bindActionCreators(ActionCreators.deleteSubCategoryItemClick, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);