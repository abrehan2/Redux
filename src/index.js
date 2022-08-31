import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import  store  from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>


  <Provider store={store}>
<App />
  </Provider>
    
  </>
);

// REDUX KO APP MAIN ACCESSIBLE KERNE KAY LIYE REDUX KA PROVIDE METHOD USE KERAY GE. APP KO US PROVIDE METHOD MAIN WRAP KERDENGE. AND PROVIDER KO CHIYE HOTA HAI STORE JO HUMNE AS PARAMETER DENA HAI