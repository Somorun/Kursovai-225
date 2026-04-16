document.addEventListener("DOMContentLoaded", function () {
    renderExpenses();
});

function renderExpenses() {
    const list = document.getElementById("expenseList");
    const countElement = document.getElementById("count");
    const totalElement = document.getElementById("total");

    if (!list) return;

    const expenses = getData();
    list.innerHTML = "";

    let totalSum = 0;

    expenses.forEach(function (item) {
        totalSum += Number(item.amount);

        const card = document.createElement("div");
        card.className = "card";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.paid;

        checkbox.addEventListener("change", function () {
            item.paid = checkbox.checked;
            saveData(expenses);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";

        deleteButton.addEventListener("click", function () {
            deleteExpense(item.id);
        });

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>Сумма: ${item.amount} ₸</p>
            <p>Дата: ${item.date}</p>
            <p>Категория: ${item.category}</p>
        `;

        card.appendChild(checkbox);
        card.appendChild(deleteButton);

        list.appendChild(card);
    });

    countElement.textContent = expenses.length;
    totalElement.textContent = totalSum;
}

function deleteExpense(id) {
    if (confirm("Удалить запись?")) {
        let expenses = getData();
        expenses = expenses.filter(function (item) {
            return item.id !== id;
        });

        saveData(expenses);
        renderExpenses();
    }
}