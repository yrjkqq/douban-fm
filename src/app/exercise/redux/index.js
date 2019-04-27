import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const TodoList = () => {
    return (
        <Provider store={store}>
            <h3>TodoList</h3>
            <App></App>
        </Provider>
    )
}
export default TodoList;