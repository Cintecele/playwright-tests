const path = require('path');
const fs = require('fs');

function clearReports() {
    const allureReportsDir = path.join(__dirname, 'allure-results');
    const testResultsDir = path.join(__dirname, 'test-results');
    const harDir = path.join(__dirname, 'har');

    // Проверяем, существует ли папка с отчетами
    if (fs.existsSync(allureReportsDir)) {
        fs.rmdirSync(allureReportsDir, { recursive: true });
        console.log('Аллюр отчеты удалены.');
    }
    if (fs.existsSync(testResultsDir)) {
        fs.rmdirSync(testResultsDir, { recursive: true });
        console.log('Прогоны тестов удалены.');
    }
    if (fs.existsSync(harDir)) {
        fs.rmdirSync(harDir, { recursive: true });
        console.log('Har-логи удалены.');
    }
}

module.exports = clearReports;