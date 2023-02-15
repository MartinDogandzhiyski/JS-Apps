window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateOutInput = document.getElementById('date-out');
    const guestsInput = document.getElementById('people-count');
    const resInfo = document.querySelector('.info-list');
    const confirmedRes = document.querySelector('.confirm-list');
    const status = document.createElement('h1');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);
    const confirmRes = document.createElement('li');

    function next(event) {
        event.preventDefault();
        const fName = firstNameInput.value;
        const lName = lastNameInput.value;
        const dateIn = dateInInput.value;
        const dateOut = dateOutInput.value;
        const people = guestsInput.value;
        const editFName = fName;
        const editLName = lName;
        const editDateIn = dateIn;
        const editDateOut = dateOut;
        const editPeople = people;
        if (typeof(fName) != 'string' || typeof(fName) != 'string' 
        || typeof(lName) != 'string' || typeof(dateIn) != 'string' 
        || typeof(dateOut) != 'string' || typeof(people) != 'string'){
            return;
        }
        if (fName == '' || lName == '' || dateIn == '' 
        || dateOut == '' 
        || people == ''){
            return;
        }

        if (Date.parse(dateIn) >= Date.parse(dateOut)) {
            return;
        }

        const element = document.createElement('li');
        element.classList.add('reservation-content')
        element.innerHTML = `
        <article>
            <h3>Name: ${fName} ${lName}</h3>
            <p>From date: ${dateIn}</p>
            <p>To date: ${dateOut}</p>
            <p>For ${people} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>`
        element.querySelector('.edit-btn').addEventListener('click', editReservation);
        element.querySelector('.continue-btn').addEventListener('click', continueReservation);
        resInfo.appendChild(element);
        resetInput();
        nextBtn.disabled = true;

        function editReservation() {
            element.remove();
            firstNameInput.value = editFName;
            lastNameInput.value = editLName;
            dateInInput.value = editDateIn;
            dateOutInput.value = editDateOut;
            guestsInput.value = editPeople;
            nextBtn.disabled = false;
        }

        function continueReservation() {
            const confirmList = document.querySelector('.confirm-list');
            confirmRes.classList.add('reservation-content');
            confirmRes.innerHTML = `
            <article>
                <h3>Name: ${fName} ${lName}</h3>
                <p>From date: ${dateIn}</p>
                <p>To date: ${dateOut}</p>
                <p>For ${people} people</p>
            </article>
            <button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>`
            confirmList.appendChild(confirmRes);
            element.remove();
            confirmRes.querySelector('.confirm-btn').addEventListener('click', confirm);
            confirmRes.querySelector('.cancel-btn').addEventListener('click', cancel);
            nextBtn.disabled = true;
        }

        function confirm() {
            confirmRes.remove();
            const statuus = document.getElementById('verification');
            statuus.classList.add('reservation-confirmed')
            statuus.textContent = 'Confirmed';
            nextBtn.disabled = false;
            
        }

        function cancel() {
            confirmRes.remove();
            const statuus = document.getElementById('verification');
            statuus.classList.add('reservation-cancelled')
            statuus.textContent = 'Cancelled';
            nextBtn.disabled = false;
        }

    }

    function resetInput() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        guestsInput.value = '';
    }



    }



    
    
