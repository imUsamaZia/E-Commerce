const plateBtn = document.querySelectorAll('.plate-btn');
const platePriceHeading = document.querySelectorAll('.plate-price');
const cupBtn = document.querySelectorAll('.cup-btn');
const cupPriceHeading = document.querySelectorAll('.cup-price');
const totalPriceElement = document.querySelector('.total-price');
const finalPrice = document.querySelector('.final-price');
const platePrice = 38.10;
const cupPrice = 32.67;
let selectedPlates = 0;
let selectedCups = 0;
let finalItemPrice = 12;
const selectPlate = () => {
    plateBtn.forEach((plate, index) => {
        plate.addEventListener('click', (e) => {
            platePriceHeading[index].innerText = 'Thanks😊';
            selectedPlates++;
            updateTotalPrice();
        });
    });
};
const selectCup = () => {
    cupBtn.forEach((cup, index) => {
        cup.addEventListener('click', (e) => {
            cupPriceHeading[index].innerText = 'Thanks😊';
            selectedCups++;
            updateTotalPrice();
        });
    });
};
const updateTotalPrice = () => {
    const totalPlatePrice = selectedPlates * platePrice;
    const totalCupPrice = selectedCups * cupPrice;
    const total = totalPlatePrice + totalCupPrice;
    const finalProductPrice = total + finalItemPrice;
    totalPriceElement.innerText = `$${total.toFixed(2)}`;
    finalPrice.innerText = `$${finalProductPrice.toFixed(2)}`;
};
selectPlate();
selectCup();
 
//  code for validatio of form

const preventForm = document.querySelector('.shippings-detail');
preventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    shippingFormValidation(e);
});

const vehicle2 = document.getElementById('vehicle2');
const submitButton = document.querySelector('.submit-order');
submitButton.addEventListener('click', (e) => {
    if (vehicle2.checked) {
        e.preventDefault();
        alert('Message sent successfully');
    }
});

const email = document.getElementById('email');
email.addEventListener('input', (e) => {
});

const firstName = document.getElementById('first-name');
firstName.addEventListener('input', (e) => {
});

const lastName = document.getElementById('last-name');
lastName.addEventListener('input', (e) => {
});

const companyName = document.getElementById('company-name');
companyName.addEventListener('input', (e) => {
});

const address = document.getElementById('address'); // Fix typo here
address.addEventListener('input', (e) => {
});

const city = document.getElementById('city');
city.addEventListener('input', (e) => {
});

const status = document.getElementById('status');
status.addEventListener('input', (e) => {
});

const contactNumber = document.getElementById('contactNumber');
contactNumber.addEventListener('input', (e) => {
});

const password = document.getElementById('password');
password.addEventListener('input', (e) => {
});

const radio = document.getElementById('radio');
radio.addEventListener('change', (e) => {
    if (radio.checked) {
        e.preventDefault();
    }
});

const vehicle1 = document.getElementById('vehicle1');
vehicle1.addEventListener('change', (e) => {
    if (vehicle1.checked) {
        e.preventDefault();
    }
});

const cardName = document.getElementById('cardName');
cardName.addEventListener('input', (e) => {
});

const cardNumber = document.getElementById('cardNumber');
cardNumber.addEventListener('input', (e) => {
});

const expireDate = document.getElementById('expireDate');
expireDate.addEventListener('input', (e) => {
});

const cvv = document.getElementById('cvv');
cvv.addEventListener('input', (e) => {
});

const shippingFormValidation = function (e) {
    const getData = localStorage.getItem('shippingData');
    const inputData = getData ? JSON.parse(getData) : [];

    if (!email.value.trim() || !emailValid(email.value)) {
        alert('Provide a valid email');
        e.preventDefault();
        return;
    }

    if (!firstName.value.trim()) {
        alert('Provide a valid first name');
        e.preventDefault();
        return;
    }

    if (!lastName.value.trim()) {
        alert('Provide a valid last name');
        e.preventDefault();
        return;
    }

    if (!companyName.value.trim()) {
        alert('Provide a valid company name');
        e.preventDefault();
        return;
    }

    if (!address.value.trim()) {
        alert('Provide a valid address');
        e.preventDefault();
        return;
    }

    if (!city.value.trim()) {
        alert('Provide a valid city');
        e.preventDefault();
        return;
    }

    if (!status.value.trim()) { 
        alert('Provide a valid status');
        e.preventDefault();
        return;
    }

    if (!contactNumber.value.trim() || !validPhoneNumber(contactNumber.value)) {
        alert('Provide a valid phone number');
        e.preventDefault();
        return;
    }

    if (!password.value.trim() || !validZipCode(password.value)) {
        alert('Provide a valid zip code');
        e.preventDefault();
        return;
    }

    const pushFormData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        companyName: companyName.value,
        address: address.value,
        city: city.value,
        status: status.value, // Fix variable name here
        contactNumber: contactNumber.value,
        password: password.value,
        cardName: cardName.value,
        cardNumber: cardNumber.value,
        expireDate: expireDate.value,
        cvv: cvv.value
    };

    inputData.push(pushFormData);
    localStorage.setItem('shippingData', JSON.stringify(inputData));
    preventForm.reset();
    alert('Message sent successfully');
};


const emailValid = (email) => {
    const mailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return mailTest.test(email);
};

const validPhoneNumber = (number) => {
    const phoneTest = /^\d{11}$/;
    return phoneTest.test(number);
};

const validZipCode = (code) => {
    const codeTest = /^\d{6}$/;
    return codeTest.test(code);
};

const validCVV = (cvv) => {
    const codeTest = /^\d{3,4}$/;
    return codeTest.test(cvv);
};

const validCardNumber = (card) => {
    const codeTest = /^\d{15}$/;
    return codeTest.test(card);
};






