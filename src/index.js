import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from './context/user-context';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import { ProductsProvider } from './context/products-context';
import { CartDropdownProvider } from "./context/cart-dropdown-context";


import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
              <CartDropdownProvider>
                <App />
              </CartDropdownProvider> 
          </ProductsProvider>
        </UserProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
