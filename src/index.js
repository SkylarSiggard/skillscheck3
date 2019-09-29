import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom'
import axios from 'axios'
import store, { GET_LIST_OF_HOUSES} from './store'


export const list = axios.get('/api/house').then(res => {
    const action = {
        type: GET_LIST_OF_HOUSES,
        payload: res.data
    }
    store.dispatch(action)
    // console.log('index')
})


ReactDOM.render(
    <HashRouter>
    <App /> 
    </HashRouter>,
    document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
    