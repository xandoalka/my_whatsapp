// export const moreSelected = e.target.parentElement.parentElement.querySelector('.licence-item--title-name');
import openDialog from "../../../script-js/open-dialog-modal.js";

const titleForDialog = document.querySelector('.dialog-title');
const dialog = document.querySelector('.dialog');
const orderMoreOption = document.querySelectorAll('.more-order-option');

orderMoreOption.forEach((option) => {
    option.addEventListener('click', (e)=>{
        const h3Element = e.target.parentElement.parentElement.querySelector(".licence-item--title-name");
        openDialog(h3Element, dialog, titleForDialog);
    });
})
