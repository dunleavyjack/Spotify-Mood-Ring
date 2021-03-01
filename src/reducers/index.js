import { combineReducers } from 'redux'

const setTokensReducer = (tokens=null, action) => {
    switch(action.type) {
        case 'SET_TOKENS':
            return action.payload
        default:
            return tokens
    };
};

export default combineReducers({
    tokens: setTokensReducer
})