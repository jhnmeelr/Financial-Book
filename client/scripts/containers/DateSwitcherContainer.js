import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actionCreators';

import DateSwitcher from '../components/DateSwitcher';

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    previousMonthClick: bindActionCreators(ActionCreators.previousMonthClick, dispatch),
    nextMonthClick: bindActionCreators(ActionCreators.nextMonthClick, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateSwitcher);