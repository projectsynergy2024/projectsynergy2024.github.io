// Function to handle table search
function searchTable() {
    // Get input element and filter value
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    // Get table rows
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');
    // Loop through table rows, hide those that don't match search query
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;
        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            if (cell) {
                const textValue = cell.textContent || cell.innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
        }
        rows[i].style.display = found ? '' : 'none';
    }
}

// Add event listener for search input
document.getElementById('searchInput').addEventListener('keyup', searchTable);
