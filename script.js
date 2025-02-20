const container = document.querySelector('.container');
const showTable = document.querySelector('.showTable');
const showDivs = document.querySelector('.showDivs');
const modalWindow = document.querySelector('.modal');
const addTaskBtn = document.querySelector('.add-task');
const close_button = document.querySelector('.close-button')
const modal__content = document.querySelector('.modal')
const addTaskModal = new Modal(modalWindow);

showTable.onclick = () => {
    showTable.classList.add('active');
    showDivs.classList.remove('active');
    table.classList.add('active');
    divs.classList.remove('active');
    drawTable(data)
}

showDivs.onclick = () => {
    showDivs.classList.add('active');
    showTable.classList.remove('active');
    divs.classList.add('active');
    table.classList.remove('active');
    drawDivs(data)
}

addTaskBtn.onclick = () => {
    addTaskModal.open();
}
close_button.onclick = () => {
    addTaskModal.close();
}
modal__content.onclick = () => {
    addTaskModal.close()
}