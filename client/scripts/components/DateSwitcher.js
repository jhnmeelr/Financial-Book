import React from 'react';

const DateSwitcher = ({
    date,
    previousMonthClick,
    nextMonthClick
}) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
        <div className="date-wrap">
            <div className="previous-outer" onClick={previousMonthClick}>
                <span className="previous"></span>
            </div>
            <span className="value">{months[date.month]} {date.year}</span>
            <div className="next-outer" onClick={nextMonthClick}>
                <span className="next"></span>
            </div>
        </div>
    );
};

export default DateSwitcher;