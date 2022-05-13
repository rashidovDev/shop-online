import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Provider store={store} >
   <App />
   </Provider>
 
    </BrowserRouter>
);

