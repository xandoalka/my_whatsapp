const openDialog = (titleExist, dialogSelector, titleForDialogToChange) => {
    dialogSelector.showModal();
    const xButton = document.querySelector('.x-button');

    function closeDialog(event) {
        event.preventDefault();
        dialogSelector.close();
    }

    xButton.addEventListener('click', closeDialog);

    titleForDialogToChange.textContent = titleExist.textContent
}
export default openDialog;