document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');
    table.addEventListener('click', (event) => {
        const cell = event.target;
        const row = cell.parentElement.rowIndex;
        const col = cell.cellIndex;
        console.log(`Clicked cell at row ${row + 1}, column ${col + 1}`);
    });

    // Insert text into the table cells during their generation
    for (let i = 0; i < 8; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 8; j++) {
            const cell = row.insertCell();
            cell.textContent = i * 8 + j + 1;
        }
    }
});
