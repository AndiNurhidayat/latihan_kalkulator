let history = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearAll() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        addToHistory(display.value, result);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function addToHistory(expression, result) {
    const historyBody = document.getElementById('history-body');
    const row = document.createElement('tr');

    const expressionCell = document.createElement('td');
    expressionCell.textContent = expression;
    row.appendChild(expressionCell);

    const resultCell = document.createElement('td');
    resultCell.textContent = result;
    row.appendChild(resultCell);

    historyBody.appendChild(row);
    history.push({ expression, result });
}

function resetHistory() {
    const historyBody = document.getElementById('history-body');
    historyBody.innerHTML = '';
    history = [];
}
