import React from 'react'
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import persons from './store/reducers/persons'

const store = createStore(
    persons,
    composeWithDevTools(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);


