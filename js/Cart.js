
//  logic to delet card
const btnDelete = document.querySelectorAll('.btn-delete')
const finalPrice = document.querySelectorAll('.final-price')
btnDelete.forEach((card, index)=>{
    card.addEventListener('click', (e)=>{
        finalPrice[index].remove()
    })
})



// logic for apply copun form

const couponForm = document.querySelector('.coupon')
const couponCode = document.querySelector('.coupon-code')
const applyCouponContent = document.querySelector('.apply-coupon-content')
applyCouponContent.addEventListener('click', (e)=>{
    couponCode.focus()
})
couponCode.addEventListener('input', (e)=>{

    console.log(e.target.value)
})
couponForm.addEventListener('submit', (e)=>{
    e.preventDefault()
})

// for product section 
const btnPrimary = document.querySelectorAll('.btn-primary');
const plateImgHeading = document.querySelectorAll('.plate-img-heading');
const mainGrid = document.querySelectorAll('.grid1');

btnPrimary.forEach((btn, index) => {
  let showText = false;

  btn.addEventListener('click', () => {
    if (showText) {
      plateImgHeading[index].style.display = 'block';
      mainGrid[index].removeChild(mainGrid[index].firstChild); 
    } else {
      plateImgHeading[index].style.display = 'none';
      const creatPrice = document.createElement('div');
      creatPrice.innerHTML = `
        <h1>Thanks for your purchase</h1>
        <div style="font-size: 2rem; text-align: center;">😊</div>`;
      creatPrice.style.color = 'white';
      creatPrice.style.fontSize = '1.5rem';

      mainGrid[index].prepend(creatPrice);
    }

    showText = !showText;
  });
});

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

