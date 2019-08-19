//Get Visible Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        console.log(expense.description);
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}