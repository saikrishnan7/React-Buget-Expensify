import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'poidjhaswer',
        description: 'Jan Rent',
        note: 'This was the final payment for the address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};