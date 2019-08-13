import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

//addExpense -> Water bill
//addExpense -> Gas bill
//setTextFiler -> bill(2 items) -> water(1 item)
//getVisibleExpenses -> print visible ones to screen

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 1200}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2500, createdAt: 2300}));

setTimeout(() => {
store.dispatch(setTextFilter('rent'));
}, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app'));