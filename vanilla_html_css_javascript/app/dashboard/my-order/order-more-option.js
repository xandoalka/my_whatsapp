const dialog = document.querySelector('.dialog');
const orderMoreOption = document.querySelectorAll('.more-order-option');

const openDialog = (numberId) => {
    dialog.showModal();
    const xButton = document.querySelector('.x-button');

    function closeDialog(event) {
        event.preventDefault();
        dialog.close();
    }

    xButton.addEventListener('click', closeDialog);

    const idSelected = document.querySelector('.dialog-number');
    idSelected.textContent = numberId.textContent
}

orderMoreOption.forEach((option) => {
    option.addEventListener('click', (e)=>{
        const h3Element = e.target.parentElement.parentElement.parentElement.querySelector('.my-order-item-title');
        openDialog(h3Element);
    });
})