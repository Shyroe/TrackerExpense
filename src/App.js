import React, { useState, useEffect, useContext, Fragment } from 'react';
import './App.scss';
// import { v4 as uuidv4 } from 'uuid';

import ExpenserApp from './components/ExpenserApp';



//Reducer
import { BalanceState } from './contextReducer/BalanceState';
import { TransactionsState } from './contextReducer/TransactionsState';




const App = () => {
   
    
        return (
            <Fragment>
            <BalanceState>
            <TransactionsState>
            <div className="App">              
               <ExpenserApp />
            </div>
            </TransactionsState>
            </BalanceState>
            </Fragment>
        )
    
}

export default App
