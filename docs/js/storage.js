function getData() {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
}

function saveData(data) {
    localStorage.setItem("expenses", JSON.stringify(data));
}