window.addEventListener('load', solve);

function solve() {
    const fNameInput = document.getElementById('first-name');
    const lNameInput = document.getElementById('last-name');
    const peopleInput = document.getElementById('people-count');
    const dateInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');
    const nextStepBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('.ticket-info-list');
    const confirmList = document.querySelector('.confirm-ticket');
    nextStepBtn.addEventListener('click', nextStep);
    const newEl = document.createElement('li');


    function nextStep(event) {
        event.preventDefault();
        const name = fNameInput.value;
        const lastName = lNameInput.value;
        const people = peopleInput.value;
        const date = dateInput.value;
        const days = daysInput.value;
        const element = document.createElement('li');
        element.classList.add('ticket');
        if (name == '' || lastName == '' || people == '' 
        || date == '' || days == ''){
            return;
        }
        element.innerHTML = `
        <article>
            <h3>Name: ${name} ${lastName}</h3>
            <p>From date: ${date}</p>
            <p>For ${days} days</p>
            <p>For ${people} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue
        </button>
        `
        element.querySelector('.edit-btn').addEventListener('click', edit);
        element.querySelector('.continue-btn').addEventListener('click', continue_);
        infoList.appendChild(element);
        nextStepBtn.disabled = true;
        const editname = fNameInput.value;
        const editlastName = lNameInput.value;
        const editpeople = peopleInput.value;
        const editdate = dateInput.value;
        const editdays = daysInput.value;
        resetInput();

        function edit() {
            element.remove();
            fNameInput.value = editname;
            lNameInput.value = editlastName;
            peopleInput.value = editpeople;
            dateInput.value = editdate;
            daysInput.value = editdays;
            nextStepBtn.disabled = false;
        }

        function continue_() {
            
            newEl.classList.add('ticket-content');
            newEl.innerHTML = `
            <article>
                <h3>Name: ${name} ${lastName}</h3>
                <p>From date: ${date}</p>
                <p>For ${days} days</p>
                <p>For ${people} people</p>
            </article>
            <button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel
            </button>
            `
            newEl.querySelector('.confirm-btn').addEventListener('click', confirm);
            newEl.querySelector('.cancel-btn').addEventListener('click', cancel);
            confirmList.appendChild(newEl);
            element.remove();
        }

        function confirm() {
            document.getElementById("main").outerHTML = "";
            const body = document.getElementById('body');
            const h1 = document.createElement('h1');
            const backBtn = document.createElement('button');
            backBtn.setAttribute('id', 'back-btn');
            backBtn.textContent = 'Back';
            backBtn.addEventListener('click', () => {
                location.reload();
              });
            h1.setAttribute('id', 'thank-you');
            h1.textContent = 'Thank you, have a nice day!';
            body.appendChild(h1);
            body.appendChild(backBtn);
        }

        function cancel() {
            newEl.remove();
            
            nextStepBtn.disabled = false;
        }

    }

    function resetInput() {
        fNameInput.value = '';
        lNameInput.value = '';
        peopleInput.value = '';
        dateInput.value = '';
        daysInput.value = '';
    }
}



    
    
