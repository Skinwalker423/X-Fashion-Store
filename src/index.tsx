import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import { store, persistor } from './store/store';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

import { PersistGate } from 'redux-persist/integration/react';

import './index-styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLInputElement);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} >
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />    
        </Elements>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();