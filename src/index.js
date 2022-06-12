import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import productReducer from './Components/Features/productSlice'
import { productAPi } from './Components/Features/productApi';
import cartReducer, { getTotal } from './Components/Features/cartSlice'

const store = configureStore({
  reducer:{
    products: productReducer, /* coming from productSlice */
    [productAPi.reducerPath]: productAPi.reducer, /* coming from productApi */
    cart: cartReducer, /* coming from cartSlice */
  },
  // we are envoking our default custome middleware that is coming from RTK QueryStore
  // and we are concatinating the middleware to our productAPi middleware
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(productAPi.middleware)
})

store.dispatch(getTotal())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
