import React from 'react';
import classNames from 'classnames';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        const {
            currency,

            belongsTo,
            categoryId,
            categoryName,
            subCategories,

            onDeleteCategoryItemClick,
            onDeleteSubCategoryItemClick
        } = this.props;

        let total = 0;
        for (let i = 0; i < subCategories.length; i++) {
            for (let j = 0; j < subCategories[i].notes.length; j++) {
                total += subCategories[i].notes[j].value;
            }
        }

        let totalDigitsAmount = total.toString().replace('.', '').length;
        if (totalDigitsAmount > 14) {
            total = total.toString().substring(0, 10) + ' ... ';
        }

        let listClass = classNames({
            active: this.state.active
        });

        let height = 60;
        if (this.state.active) {
            if (subCategories.length != 1) {
                height += 60 * subCategories.length;
            } else {
                height = 120;
            }
        }

        let valueStyle, amountStyle;
        if (belongsTo === 'Expenses') {
            valueStyle = {
                color: '#e34661'
            };
            amountStyle = {
                backgroundColor: '#e34661'
            };
        } else {
            valueStyle = {
                color: '#98bf7e'
            };
            amountStyle = {
                backgroundColor: '#98bf7e'
            };
        }

        return (
            <li className={listClass} style={{ height }} >
                <div className="category" onClick={() => this.handleClick()}>
                    <span className="name">
                        {categoryName}
                        <span className="amount" style={amountStyle}>{subCategories.length}</span>
                    </span>
                    <div className="delete-item" onClick={() => onDeleteCategoryItemClick(categoryId)}><span></span></div>
                    <span className="value" style={valueStyle}>
                        {total}
                        <span className="icon icon-currence">{currency.activeSymbol}</span>
                    </span>
                </div>
                <ul className="subcategories">
                    {subCategories.map((subCategory, i) => {
                        return subCategory.notes.map(note => {
                            let totalDigitsAmount = note.value.toString().replace('.', '').length;
                            if (totalDigitsAmount > 14) {
                                note.value = note.value.toString().substring(0, 10) + ' ... ';
                            }
                            return (
                                <li 
                                    key={i}
                                    className="subcategory">
                                    {subCategory.subCategoryName}
                                    <div className="delete-item" onClick={() => onDeleteSubCategoryItemClick(categoryId, subCategory.id)}><span></span></div>
                                    <span className="value" style={valueStyle}>
                                        {note.value}
                                        <span className="icon icon-currence">{currency.activeSymbol}</span>
                                    </span>
                                </li>
                            );
                        });
                    })}
                </ul>
            </li>
        );
    }
}

export default ListItem;