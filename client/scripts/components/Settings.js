import React from 'react';
import classNames from 'classnames';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReseting: false
        };
    }
    handleParentResetClick() {
        this.setState({
            isReseting: true
        });
    }
    handleResetClick() {
        this.props.resetData();
        this.setState({
            isReseting: false
        });
    }
    handleDeclineClick() {
        this.setState({
            isReseting: false
        });
    }
    handleListItemClick(activeSymbol) {
        this.props.changeCurrency(activeSymbol);
    }
    render() {
        const {
            currency
        } = this.props;

        let viewClass = classNames({
            'active': this.state.isReseting
        });
        let currenciesList = currency.currencies.map((item, i) => {
            return <li style={
                (() => {
                    if (item.currencySymbol === currency.activeSymbol) {
                        return {
                            'backgroundColor': '#f0f0f0'
                        };
                    }
                })()
            } key={i} onClick={() => this.handleListItemClick(item.currencySymbol)}>{item.currencyName}<span>{item.currencySymbol}</span></li>;
        });

        return (
            <div className="settings-wrap">
                <div className={ 'warning-window ' + viewClass }>
                    <p>Do you actually want to reset data?</p>
                    <span className="answer-no" onClick={() => this.handleDeclineClick()}>No</span>
                    <span className="answer-yes" onClick={() => this.handleResetClick()}>Yes</span>
                </div>
                <h3>Currencies</h3>
                <ul>
                    {currenciesList}
                </ul>
                <div className="reset-data" onClick={() => this.handleParentResetClick()}>Reset Data</div>
            </div>
        );
    }
}


export default Settings;