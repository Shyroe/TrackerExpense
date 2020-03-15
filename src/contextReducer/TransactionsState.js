import React, { useReducer, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import TransactionsContext from './TransactionsContext';
import TransactionsReducer from './TransactionsReducer';


export const TransactionsState = (props) => {
    // const [transactions, setTransactions] = useState([
        
    // ]);

    const initialState = {
        transactions: []
    }
    
    const [state, dispatch] = useReducer(TransactionsReducer, initialState)

    const [form, handleForm] = useState({
        id: null,
        desc: '',
        value: null,
        type: ''       

    });

    const handleValues = (e) => {
        console.log([e.target.name], e.target.value)
        handleForm({
            ...form,
            // id: transactions.length,        
            [e.target.name]: e.target.value
        })
    };

    // const addTransaction = (e) => {      
      
    //     const newTransaction = {
    //         // id: form.id,
    //         id: uuidv4(),
    //         desc: form.desc,
    //         value: Number(form.value),
    //         type: form.value >= 0 ? 'positive' : 'negative'
            
    //     }

    //     console.log('NewTransaction: ', newTransaction)

    //     setTransactions(transactions => ([
    //         ...transactions, 
    //         newTransaction
    //     ]));
    //     // () => console.log('Transactions: ', transactions)

    //     console.log('Transactions: ', transactions)

    //     e.preventDefault();
        
    // }

    const addTransaction = (e) => {
        const newTransaction = {
            // id: form.id,
            id: uuidv4(),
            desc: form.desc,
            value: Number(form.value),
            type: form.value >= 0 ? 'positive' : 'negative'
            
        }

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: newTransaction
        });

        e.preventDefault();
    }

    // const removeTransaction = (id) => {
    //     const newTransaction = transactions.filter(item => item.id != id);   
    //     setTransactions([...newTransaction])
    // }

    const removeTransaction = (id) => {
        console.log('Id: ', id);
        console.log('transactionsState: ', state.transactions)
        dispatch({
            type: 'REMOVE_TRANSACTION',
            payload: id
        })
    }

    return (
        <TransactionsContext.Provider
        value={{
            transactions: state.transactions,            
            addTransaction,
            removeTransaction,
            handleValues,
            form,
            handleForm
        }}
        >
            {props.children}
        </TransactionsContext.Provider>
    )
}