import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask.js';

import View from './View';

import Header from '../containers/HeaderContainer';
import Main from '../containers/MainContainer';
import List from '../containers/ListContainer';
import Settings from '../containers/SettingsContainer';
import DateSwitcher from '../containers/DateSwitcherContainer';

// images
import '../../assets/images/icon.png';
// fonts
import '../../assets/fonts/NeuronAngled-Light.otf';
import '../../assets/fonts/NeuronAngled-Bold.otf';
// styles
import '../../styles/style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            category: '',
            subCategory: '',
            isValidatingInputs: false
        };
    }
    // Autofocus broke view positioning!
    //componentWillReceiveProps(nextProps) {
    //    if (nextProps.staticStates.NewNote.isActive) {
    //        this.refs.maskedInput.inputElement.focus();
    //    }
    //}
    handleMaskChange() {
        this.setState({
            value: +this.refs.maskedInput.inputElement.value.replace(/[^0-9\.]+/g,'')
        });
    }
    handleCategoryChange() {
        this.setState({
            category: this.refs.categoryInput.value.trim()
        });
    }
    handleSubCategoryChange() {
        this.setState({
            subCategory: this.refs.subCategoryInput.value.trim()
        });
    }
    handleAddNewExpenseNote() {
        if (this.state.category && this.state.subCategory && this.state.value) {
            this.props.addExpenseNote(this.state.category, this.state.subCategory, this.state.value, this.props.date.month, this.props.date.year);
            this.refs.maskedInput.inputElement.value = '';
            this.refs.categoryInput.value = '';
            this.refs.subCategoryInput.value = '';
            this.setState({
                value: '',
                category: '',
                subCategory: '',
                isValidatingInputs: false
            });
        } else {
            this.setState({
                isValidatingInputs: true
            });
        }
    }
    handleAddNewIncomeNote() {
        if (this.state.category && this.state.subCategory && this.state.value) {
            this.props.addIncomeNote(this.state.category, this.state.subCategory, this.state.value, this.props.date.month, this.props.date.year);
            this.refs.maskedInput.inputElement.value = '';
            this.refs.categoryInput.value = '';
            this.refs.subCategoryInput.value = '';
            this.setState({
                value: '',
                category: '',
                subCategory: '',
                isValidatingInputs: false
            });
        } else {
            this.setState({
                isValidatingInputs: true
            });
        }
    }
    render() {
        const {
            staticStates,
            date,
            currency
        } = this.props;

        const numberMask = (activeSymbol) => {
            return createNumberMask({
                prefix: '',
                //suffix: activeSymbol,
                allowDecimal: true,
            });
        };

        let validateActive = this.state.isValidatingInputs ? 'active' : null;

        return (
            <div className="app-wrap">
                <Header
                    heading={staticStates.Header.heading}
                    prevComponent={staticStates.prevComponent}
                    onAddNewExpenseNote={() => this.handleAddNewExpenseNote()}
                    onAddNewIncomeNote={() => this.handleAddNewIncomeNote()}
                />
                <View
                    activeState={staticStates.Main.isActive}
                    backState={staticStates.Main.isBack}
                    foldState={staticStates.Main.isFolded}
                    waitingState={staticStates.Main.isWaiting}>
                    <Main date={date} currency={currency} />
                </View>
                <View
                    activeState={staticStates.Settings.isActive}
                    backState={staticStates.Settings.isBack}
                    foldState={staticStates.Settings.isFolded}
                    waitingState={staticStates.Settings.isWaiting}>
                    <Settings currency={currency}/>
                </View>
                <View
                    activeState={staticStates.List.isActive}
                    backState={staticStates.List.isBack}
                    foldState={staticStates.List.isFolded}
                    waitingState={staticStates.List.isWaiting}>
                    <List
                        date={date}
                        currency={currency}
                        heading={staticStates.Header.heading}
                        prevComponent={staticStates.prevComponent} />
                </View>
                <View
                    activeState={staticStates.NewNote.isActive}
                    backState={staticStates.NewNote.isBack}
                    foldState={staticStates.NewNote.isFolded}
                    waitingState={staticStates.NewNote.isWaiting}>
                    <div className="new-note-wrap">
                        <form>
                            <MaskedInput mask={numberMask(currency.activeSymbol)} ref="maskedInput" placeholder={currency.activeSymbol} onAccept={() => this.handleMaskChange()}/>
                            <input type="text" ref="categoryInput" placeholder="Category" onChange={() => this.handleCategoryChange()} />
                            <input type="text" ref="subCategoryInput" placeholder="Subcategory" onChange={() => this.handleSubCategoryChange()} />
                        </form>
                        <div className={'validate-inputs ' + validateActive}>
                            <p>All inputs must be filled!</p>
                        </div>
                    </div>
                </View>
            </div>
        );
    }
}

export default App;