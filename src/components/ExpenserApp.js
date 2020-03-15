import React, { Fragment, useEffect, useContext } from 'react';

import TransactionForm from './TransactionForm';
import Balance from './Balance';
import TransactionItem from './TransactionItem';


//Reducer
import TransactionsContext from '../contextReducer/TransactionsContext';
import  BalanceContext  from '../contextReducer/BalanceContext';

const ExpenserApp = () => {   
   
    const { transactions, removeTransaction } = useContext(TransactionsContext);
    const { addBalance, formatMoney} = useContext(BalanceContext);

    useEffect(() => {
        
        const somaValues = transactions.reduce((valAcum,valArr) => {
                const total = valAcum + valArr.value;
                return total
            }, 0);
            console.log('somaValues: ', somaValues)

        addBalance({ totalBalance: somaValues })
       
        //Income
        // let positives = transactions.filter(item => item.value > 0)
        let positives = transactions.filter(item => item.type == 'positive')
        //Sum negative values
        const sumPositives = positives.reduce((valAcum, valArr) => {
            return valAcum + valArr.value;
        }, 0)
        // console.log('SumPositives: ', sumPositives);

        addBalance({ income: sumPositives })
     
        //Expense
        // let negatives = transactions.filter(item => item.value < 0)
        let negatives = transactions.filter(item => item.type == 'negative')
        //Sum negative values
        const sumNegatives = negatives.reduce((valAcum, valArr) => {
            return valAcum + valArr.value;
        }, 0)
        // console.log('SumNegatives: ', sumNegatives)

        addBalance({ expense: sumNegatives });

        console.log('TransactionsUseEffect: ', transactions)

    }, [transactions])  

    return (
        <div className="expenser">
            <h2 className="primary-title">Expense Tracker</h2>
            <Balance
            
            />          

            <div className="history">
                <h2 className="history__title">History</h2>
                <ul className="list">
                    {
                        transactions.map(transaction => (
                            <TransactionItem key={transaction.id} transaction={transaction} formatMoney={formatMoney} 
                             removeTransaction={removeTransaction} 
                             />                         
                                                   
                            
                        ))
                    }                 
                   
                </ul>
            </div>
            <TransactionForm />
        </div>
    )
}

export default ExpenserApp
