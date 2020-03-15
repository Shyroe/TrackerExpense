import React, { Fragment, useContext } from 'react';

import  BalanceContext  from '../contextReducer/BalanceContext';

const Balance = () => {

    const { formatMoney, totalBalance, income, expense } = useContext(BalanceContext);
    const sign = totalBalance == 0 ? '' : totalBalance > 0 ? '+' : '-';
    
    
    return (
        <Fragment>
        <div className="balance">
            <p className="balance__name">Your Balance</p>
            <h3 className="balance__value">{sign} {formatMoney(Math.abs(totalBalance))}</h3>                
        </div>
        <div className="info-cost">
            <div className="income">
                <h4 className="income__name">Income</h4>
                <p className="income__value">{formatMoney(income)}</p>
            </div>
            <div className="info-cost__separator">|</div>
            <div className="expense">
                <h4 className="expense__name">expense</h4>
                <p className="expense__value"> {formatMoney(Math.abs(expense))}</p>
            </div>
        </div>
        </Fragment>
    )
}

export default Balance
