function deleteByEmail() {
    const query = document.querySelector('input[name="email"]').value;
    const rows = document.querySelectorAll('#customers tbody tr');
    const rowsArray = Array.from(rows);
    let deleted = false;

    for (let row of rowsArray){
        const col = row.children[1];

        if (col.textContent == query) {
            row.remove();
            deleted = true;
        }
    }
    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.'


}