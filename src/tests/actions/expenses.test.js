import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up removeExpense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up editExpense', () => {
    const action = editExpense('123abc', {note: 'New Note Value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note Value'
        }
    });
});

test('should set up addExpense', () => {
    const action = addExpense({
        description: 'Rent',
        amount: 109090,
        createdAt: 1000,
        note: 'sample'
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Rent',
            amount: 109090,
            createdAt: 1000,
            note: 'sample'
        } 
    });
});

test('should set up addExpense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        } 
    });
});