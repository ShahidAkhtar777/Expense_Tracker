const contextReducer = (state,action) => {
    let transactions;
    if(action.type === 'DELETE_TRANSACTION'){
        transactions = state.filter((t)=>t.id !== action.payload)
        return transactions;    
    }
    else if(action.type === 'ADD_TRANSACTION'){
        transactions = [action.payload, ...state];
        return transactions;
    }
    else{
        return state;
    }
}  

export default contextReducer; 