import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        {console.log(props)}
        <input type="text" value={props.filters.text} onChange={props.onChangeFilter}
        />
        <select value={props.filters.sortBy} onChange={props.onChangeForSort}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: e => {
            dispatch(setTextFilter(e.target.value));
        },
        onChangeForSort: e => {
            if(e.target.value === 'date') {
                dispatch(sortByDate());
            }
            else if(e.target.value === 'amount') {
                dispatch(sortByAmount());
            }
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);