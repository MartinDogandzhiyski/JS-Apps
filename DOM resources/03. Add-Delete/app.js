function addItem() {
    const text = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = text;
    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', () => li.remove());
    li.appendChild(deleteBtn);
    const list = document.getElementById('items');
    list.appendChild(li);

}