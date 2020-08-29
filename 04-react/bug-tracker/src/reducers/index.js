import {combineReducers } from 'redux';

import bugsReducer from './bugsReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
    bugsData: bugsReducer,
    projectsData : projectsReducer
});

export default rootReducer;