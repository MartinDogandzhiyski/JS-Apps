function attachEvents() {
    document.getElementById('submit').addEventListener('click', addComment);
    document.getElementById('refresh').addEventListener('click', displayAllComments);

}

const messengerUrl = 'http://localhost:3030/jsonstore/messenger';

function addComment() {

}

function displayAllComments() {
    fetch(messengerUrl).then(res => {
        if (!res.ok) {
            throw new Error('Error')
        }
        return res.json();
    }).then( data => {
        const textArea = document.querySelector('#messages')
        const allComments = [];
        Object.values(data).forEach(c => allComments.push(`${c.author}: ${c.content}`))
        textArea.value = allComments.join('\n')
    })
}

attachEvents();