import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
// import { selectSubreddit, fetchPosts } from './actions';
import rootReducer from "./reducers";
import App from './containers/App'

const middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

// store.dispatch(selectSubreddit('reactjs'));
// store.dispatch(fetchPosts('reactjs'))
//     .then(() => console.log(store.getState()));

export default function ReduxAsync() {
    return (
        <Provider store={store}>
            <h3>Async-redux</h3>
            <App></App>
        </Provider>
    )
}

