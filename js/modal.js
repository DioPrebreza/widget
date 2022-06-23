const modals = document.querySelectorAll('[data-modal]');

modals.forEach((trigger) => {
    const modal = document.getElementById(trigger.dataset.modal);
    trigger.addEventListener('click', (event) => {
        event.preventDefault();
        modal.classList.add('lhn-open-modal');

        const exits = modal.querySelectorAll('.lhn-modal-exit');
        exits.forEach((exit) => {
            exit.addEventListener('click', (event) => {
                event.preventDefault();
                modal.classList.remove('lhn-open-modal');
            })
        })
    })
})