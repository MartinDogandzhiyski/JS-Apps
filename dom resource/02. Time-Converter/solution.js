function attachEventsListeners() {
    const inputdays = document.getElementById('days');
    const inputhours = document.getElementById('hours');
    const inputminutes = document.getElementById('minutes');
    const inputseconds = document.getElementById('seconds');
    console.log(inputdays)

    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(event) {
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        console.log(inputdays.value)

        const parent = event.target.parentElement;

        if (parent.textContent.includes('Days')){
            days = Number(parent.querySelector('#days').value);
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Hours')){
            hours = Number(parent.querySelector('#hours').value);
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Minutes')){
            minutes = Number(parent.querySelector('#minutes').value);
            hours = minutes / 60
            days = hours / 24;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Seconds')){
            seconds = Number(parent.querySelector('#seconds').value);
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
        }

        inputdays.value = days;
        inputhours.value = hours;
        inputminutes.value = minutes;
        inputseconds.value = seconds;
    }
}