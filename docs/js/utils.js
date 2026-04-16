function calculateTotal(expenses) {
    return expenses.reduce((sum, item) => sum + Number(item.amount), 0);
}