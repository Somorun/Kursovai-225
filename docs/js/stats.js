document.addEventListener("DOMContentLoaded", function () {

    const expenses = getData();
    const categories = {};

    expenses.forEach(function (item) {
        if (categories[item.category]) {
            categories[item.category]++;
        } else {
            categories[item.category] = 1;
        }
    });

    let topCategory = "";
    let maxCount = 0;

    for (let category in categories) {
        if (categories[category] > maxCount) {
            maxCount = categories[category];
            topCategory = category;
        }
    }

    const element = document.getElementById("topCategory");

    if (element) {
        element.textContent = topCategory || "Нет данных";
    }
});