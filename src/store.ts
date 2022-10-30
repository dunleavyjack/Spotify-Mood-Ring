import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware())
);
