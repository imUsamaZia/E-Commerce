const selectItem = document.querySelectorAll('.griding1');
const printMessage = document.querySelectorAll('.order-plate2-content');
const printMessage1 = document.querySelectorAll('.order-plate2-content2')
let printContent = 'text';

selectItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (printContent === 'text') {
            printMessage[index].innerText = 'Selected';
            printMessage1[index].innerText = 'Selected';

            printContent = 'delivery';
        } else {
            printMessage[index].innerText = 'Delivered on Mar 13';
            printMessage1[index].innerText = 'Delivered on Mar 2';

            printContent = 'text';
        }
    });
});



const contactButtons = document.querySelectorAll('.btn-contacting');

let selectedButton = null;

contactButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (selectedButton) {
            selectedButton.style.backgroundColor = '#E1E2DA';
            selectedButton.style.color = '#385f59';
            selectedButton.style.webkitTextFillColor = '#385f59';
        }

        button.style.backgroundColor = '#385f59';
        button.style.color = '#E1E2DA';
        button.style.webkitTextFillColor = '#E1E2DA';

        selectedButton = button;
    });
});