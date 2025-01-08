document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');
    table.addEventListener('click', (event) => {
        const cell = event.target;
        const row = cell.parentElement.rowIndex;
        const col = cell.cellIndex;
        console.log(`Clicked cell at row ${row + 1}, column ${col + 1}`);
    });
});
