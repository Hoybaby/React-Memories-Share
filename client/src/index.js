import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
// import { configureStore } from '@reduxjs/toolkit'
// import {configureStore} from '@reduxjs/toolkit';
//provider will keep track of the store which will allow us to access the state
import {Provider} from 'react-redux';
//create store was deprecated os went to configureStore which replaced it.
import {legacy_createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
//USING the legacy_createStore for now but will try to configure later with redux toolkit
const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))




ReactDOM.render(
<Provider store={store}>
   <App /> 
</Provider>, 
document.getElementById('root'));
