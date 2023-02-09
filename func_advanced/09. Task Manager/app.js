function solve() {
    const inputTask = document.getElementById('task');
    const inputDescription = document.getElementById('description');
    const inputDate = document.getElementById('date');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);
    const openDiv = document.querySelectorAll('div')[4];
    const inPrgrsDiv = document.querySelectorAll('div')[6];
    const completeDiv = document.querySelectorAll('div')[8];
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const newDiv = document.createElement('div');
    const article = document.createElement('article');
    function add(event) {
        event.preventDefault();
        const divBtns = document.createElement('div');
        divBtns.classList.add('flex');
        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', startArticle);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteArticle);
        const finishBtn = document.createElement('button');
        finishBtn.classList.add('orange');
        finishBtn.textContent = 'Finish';
        finishBtn.addEventListener('click', finishArticle);
        h3.textContent = inputTask.value;
        p1.textContent = `Description: ${inputDescription.value}`
        p2.textContent = `Due date: ${inputDate.value}`
        divBtns.appendChild(startBtn);
        divBtns.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(divBtns);
        openDiv.appendChild(article);

        function startArticle() {
            openDiv.removeChild(article);
            divBtns.removeChild(startBtn);
            divBtns.appendChild(deleteBtn);
            divBtns.appendChild(finishBtn);
            
            inPrgrsDiv.appendChild(article);
            
        }

        function finishArticle() {
            article.removeChild(divBtns);
            completeDiv.appendChild(article);

        }

        function deleteArticle() {
            article.remove();
        }
    }
}