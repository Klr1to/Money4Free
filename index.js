document.getElementById('calcBtn').addEventListener('click', function () {
    var amount = parseFloat(document.getElementById('amount').value) || 0;
    var rate = parseFloat(document.getElementById('rate').value) || 0;
    var days = parseFloat(document.getElementById('days').value) || 0;

    var profit = amount * (rate / 100) * days;
    var total = amount + profit;

    var result = document.getElementById('result');
    result.textContent =
        'Прибыль: ' + profit.toLocaleString('ru-RU') + ' ₽' +
        ' | Итого через ' + days + ' дн.: ' + total.toLocaleString('ru-RU') + ' ₽';
});
