const getExpensesTotal =  (expenses) => {
    const totalSum = expenses.reduce((accumulator, currentExpense) => accumulator + currentExpense.amount, 0);
    return totalSum;
};

export default getExpensesTotal;