import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actionCreators';

import Settings from '../components/Settings';

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    resetData: bindActionCreators(ActionCreators.resetData, dispatch),
    changeCurrency: bindActionCreators(ActionCreators.changeCurrency, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);