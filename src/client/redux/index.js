import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import resultsReducer from './resultsReducer';

export const store = createStore(
    resultsReducer,
    applyMiddleware(thunk)
);
