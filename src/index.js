import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Tuple, combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import './index.css';
import App from './app';
import 'tachyons';
import reportWebVitals from "./reportWebVitals";
import { searchChange , robotsData } from './reducers';

const reducer = combineReducers({searchChange , robotsData})
const store = configureStore({
        reducer,
        middleware : () => new Tuple(thunk , logger)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App/></Provider>)


reportWebVitals();