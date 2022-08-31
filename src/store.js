import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore({
    reducer: {
       custom: customReducer,
    }
});

export default store; 

// bus store ko configure ki instance deker export kerdena hai. ConfigureStore main bahut sare reducers ayege. Reducers ka object hai ismain multiple reducers asakte hai. Reducers ki hum alag file banale tou bhetar hai

// custom: customReducer key:value---> key ka name kuch bhi hosakta hai