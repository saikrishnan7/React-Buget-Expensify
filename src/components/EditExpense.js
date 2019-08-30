import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

//Refactor to class based component
//Setup mapDispatchToProps editExpense and removeExpense

//should render EditExpensePage
//snapshot

//should render EditExpensePage
//spies

//should handle removeExpense
//spies

export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
                <button onClick={ this.onRemove }>Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense(data))
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);