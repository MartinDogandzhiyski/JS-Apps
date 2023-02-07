function lockedProfile() {
    Array.from(document.querySelectorAll(".profile button")).forEach((e) =>
    e.addEventListener('click', onClick));
    function onClick(event) {
        const parent = event.target.parentElement;
        const unlockedCheck = parent.querySelector('input[value="unlock"]');
        if (unlockedCheck.checked) {
            const btn = parent.querySelector('button');
            const hiddenInfo = parent.querySelector('div');
            if (btn.textContent === 'Show more') {
                hiddenInfo.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
                btn.textContent = 'Show more';
            }
            
        }
    }
}