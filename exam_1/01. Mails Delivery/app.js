function solve() {

    const nameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const list = document.getElementById('list')
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    addBtn.addEventListener('click', createMail);
    resetBtn.addEventListener('click', onReset);
    const deleted = document.querySelector('.delete-list');
    const sent = document.querySelector('.sent-list');


    function createMail(event) {
        event.preventDefault();
        const name = nameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (name == '' || title == '' || message == ''){
            return;
        }

        const element = document.createElement('li');
        element.innerHTML = `<h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`
        element.querySelector('#delete').addEventListener('click', deleteMail);
        element.querySelector('#send').addEventListener('click', sendMail);
        list.appendChild(element);
        resetInput();

        function sendMail() {
            const sendMails = document.createElement('li');
            sendMails.innerHTML = `<span>To: ${name}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`

            sendMails.querySelector('.delete').addEventListener('click', () => {
                const deletedMail = document.createElement('li');
            deletedMail.innerHTML = `<span>To: ${name}</span>
            <span>Title: ${title}</span>`;
            deleted.appendChild(deletedMail);
            sendMails.remove();
            })

            sent.appendChild(sendMails);
            element.remove();
          
        }

        function deleteMail() {
            const deletedMail = document.createElement('li');
            deletedMail.innerHTML = `<span>To: ${name}</span>
            <span>Title: ${title}</span>`;
            deleted.appendChild(deletedMail);
            element.remove();
        }

    }



    function onReset(event) {
        event.preventDefault();
        resetInput();
    }

    function resetInput() {
        nameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
}


solve()