export default (state, action) => {
    switch(action.type) {
        case 'ADD_BALANCE':
            console.log('TotalBalanceReducer: ', state.totalBalance)
            return {
                ...state,
                ...action.payload
               
            }
        // case 'FORMAT_MONEY':
        //     return new Intl.NumberFormat('pt-BR', {
        //         style: 'currency',
        //         currency: 'BRL'
        //     }).format(action.payload);
                 
        default:
            return state
    }
}