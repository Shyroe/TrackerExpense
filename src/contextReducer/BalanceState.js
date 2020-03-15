import React, { useReducer } from 'react';

import BalanceReducer from './BalanceReducer';
import BalanceContext  from './BalanceContext';

export const BalanceState = (props) => {

    const initialState = {
        totalBalance: 0,
        income: 0,
        expense: 0
    };

    const [state, dispatch] = useReducer(BalanceReducer, initialState)

    // const addBalance = (value) => {
    //     setBalance(balance => ({
    //         ...balance, //Copia todo o estado atual para um novo objeto
    //         ...value //altera só  o novo valor
    //     }))
    // }

    const addBalance = (value) => {
        dispatch({
            type: 'ADD_BALANCE',
            payload: value
        })
    }

    // // const formatMoney = (value) => {
        function formatMoney(value) {
            // console.log('valueFormatMoneyReducer: ', value);   
            
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(value);       
        }

    // function formatMoney(value) {
    //     dispatch({
    //         type: 'FORMAT_MONEY',
    //         payload: value
    //     })
    // };

    // function formatMoney(value) {
    //     return new Intl.NumberFormat('pt-BR', {
    //             style: 'currency',
    //             currency: 'BRL'
    //         }).format(value);       
    //     }
    // }

    return (
        <BalanceContext.Provider
        value={{
          
           totalBalance: state.totalBalance,
           income: state.income,
           expense: state.expense,
           addBalance,
           formatMoney

        }}
        >
            {props.children}
        </BalanceContext.Provider>
    )
}