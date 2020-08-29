import {combineReducers } from 'redux';

import bugsReducer from './bugsReducer';

const rootReducer = combineReducers({
    bugsData: bugsReducer
});

export default rootReducer;