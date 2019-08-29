import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'; 

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 1200}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2500, createdAt: 2300}));
store.dispatch(addExpense({ description: 'Rent', amount: 8500, createdAt: 800}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app'));