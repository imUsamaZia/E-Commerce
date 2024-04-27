const btnMinus = document.querySelectorAll('.btn-minus');
const btnPlus = document.querySelectorAll('.btn-plus');
const increasingNumber = document.querySelectorAll('.increasing-number');
const dollerPrice = document.querySelectorAll('.product-plate2-content');
const initialPrice = 0;

// Set initial values to 1
increasingNumber.forEach((input) => {
    input.value = 1;
});

btnPlus.forEach((plus, index) => {
    plus.addEventListener('click', (e) => {
        const inputValue = increasingNumber[index];
        inputValue.value = (parseInt(inputValue.value, 10) + 1) || 0;
        updateDollerPrice(inputValue.value, dollerPrice[index]);
    });
});

btnMinus.forEach((minus, index) => {
    minus.addEventListener('click', (e) => {
        const inputValue = increasingNumber[index];
        if (inputValue.value > 1) { // Ensure the value doesn't go below 1
            inputValue.value = (parseInt(inputValue.value, 10) - 1) || 0;
            updateDollerPrice(inputValue.value, dollerPrice[index]);
        }
    });
});

increasingNumber.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const inputValue = input.value;
        updateDollerPrice(inputValue, dollerPrice[index]);
    });
});

const updateDollerPrice = (quantity, dollarValue) => {
    const validQuantity = parseInt(quantity, 10) || 0;
    const totalPrice = initialPrice + validQuantity;
    if (isNaN(totalPrice)) {
        dollarValue.textContent = `$${initialPrice.toFixed(2)}`;
    } else {
        dollarValue.textContent = `$${totalPrice.toFixed(2)}`;
    }
};


//  for dropsdown
const thirdMonth = document.querySelectorAll('.third-month');
const dropdownContent = document.querySelectorAll('.dropdown-content1');
let isDropdown = Array(thirdMonth.length).fill(false);
thirdMonth.forEach((dropdown, index) => {
    dropdown.addEventListener('click', (e) => {
        if (isDropdown[index]) {
            dropdownContent[index].style.display = 'none';
        } else {
            dropdownContent.forEach((dropdown, i) => {
                if (i !== index) {
                    dropdown.style.display = 'none';
                    isDropdown[i] = false;
                }
            });
            dropdownContent[index].style.display = 'block';
        }
        isDropdown[index] = !isDropdown[index]; 
    });
});


const contactButtons = document.querySelectorAll('.btn-contact');

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









