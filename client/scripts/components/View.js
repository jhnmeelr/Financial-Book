import React from 'react';
import classNames from 'classnames';

const View = ({
    children,

    activeState,
    backState,
    foldState,
    waitingState,
}) => {
    let viewClass = classNames({
        'view': true,
        'view-center': activeState,
        'view-from-center-to-right': backState,
        'view-to-left': foldState,
        'view-is-waiting': waitingState
    });

    return (
        <div className={viewClass}>
            {children}
        </div>
    );
};

export default View;