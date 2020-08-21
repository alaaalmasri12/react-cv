import {combineReducers, createStore } from 'redux';
import reivews from './userreview';
let reducers=combineReducers({reivews});

const store = () => {
    return createStore(reducers);
}

export default store();
