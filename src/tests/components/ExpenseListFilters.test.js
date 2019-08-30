import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeAll(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilter correctly', () => {   
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })   
    expect(wrapper).toMatchSnapshot();
});

// should handle text change
test('should handle text change', () => {
    const value = 'kundi';
    wrapper.find('input').simulate('change', {
        target:{
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// should sort by date
test('should sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target:{
            value
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

// should sort by amount
test('should sort by amount', () => {
    const value= 'amount';
    wrapper.find('select').simulate('change', {
        target:{
            value
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

// should handle date changes
test('should handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'days');
    wrapper.find('DateRangePicker').prop('OnDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes  
test('should handle date focus changes', () => {
    const calendarFocused = true;
    wrapper.find('DateRangePicker').prop('onFocusChange')({ calendarFocused });
    expect(wrapper.state('calendarFocused')).toEqual({ calendarFocused });
});