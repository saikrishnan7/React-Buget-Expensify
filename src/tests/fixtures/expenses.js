import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 1950,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Gas Bill',
    note: '',
    amount: 19,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
