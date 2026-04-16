document.getElementById("expenseForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const title = document.getElementById("title").value.trim();
        const amount = document.getElementById("amount").value.trim();
        const date = document.getElementById("date").value;
        const category = document.getElementById("category").value.trim();

        if (!title || !amount || !date || !category) {
            alert("Заполните все поля!");
            return;
        }

        const newExpense = {
            id: Date.now(),
            title,
            amount,
            date,
            category,
            paid: false
        };

        const expenses = getData();
        expenses.push(newExpense);
        saveData(expenses);

        window.location.href = "index.html";
    });