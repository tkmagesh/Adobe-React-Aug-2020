import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const appStore = createStore(rootReducer, applyMiddleware(logger, thunk));

export default appStore;