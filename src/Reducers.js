import {createReducer} from "@reduxjs/toolkit";

// REDUCER BANANE KAY LIYE CHIYE

const initialState = {
    c: 0,
}

export const customReducer = createReducer(initialState, {


increment: (state, action)=> {
state.c+=1; // idher action ki zarorat nae ab
},
incrementByValue: (state, action)=> {
    
state.c+=action.payload; // idher action ki zarorat nae ab
},

decrement: (state, action) => {
    state.c-=1;
},


}) // (initial state, multiple reducers)