import React, { useContext } from 'react';

//Reducer
import  TransactionsContext  from '../contextReducer/TransactionsContext';

const TransactionForm = () => {

    const { addTransaction, handleValues  } = useContext(TransactionsContext);
    return (
        <div className="transaction">
            <h3 className="transaction__title">Add new transaction</h3>
            <form onSubmit={addTransaction} className="form-transaction">
                <label className="form-transaction__label" htmlFor="">Text</label>
                <input type="text" name="desc" onChange={handleValues} className="form-transaction__description" />
                <label className="form-transaction__label" htmlFor="">Amount</label>
                <input type="number" name="value" onChange={handleValues} className="form-transaction__value" />
                <input type="submit" className="form-transaction__submit" value="Add Transaction" />
            </form>
        </div>
    )
}

export default TransactionForm
