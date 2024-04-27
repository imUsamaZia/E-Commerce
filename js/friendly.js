// change the button color
const buttons = document.querySelectorAll('.moveable-btn button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(otherButton => {
            if (button === otherButton) {
                otherButton.style.backgroundColor = 'transparent'
                otherButton.style.color = 'var(--accent-color)'
            } else {
                otherButton.style.backgroundColor = 'var(--accent-color)'
                otherButton.style.color = 'var(--secondary-white-heading)'
            }

        });
    });
});

// code for product section
const btnPrimary = document.querySelectorAll('.item-btn');
const plateImgHeading = document.querySelectorAll('.item-img');
const mainGrid = document.querySelectorAll('.home-items');
const itemPrice = document.querySelectorAll('.item-rating');
let price = 23;

btnPrimary.forEach((btn, index) => {
    let showText = false;
    btn.addEventListener('click', () => {
        if (showText) {
            plateImgHeading[index].style.display = 'block';
            mainGrid[index].removeChild(mainGrid[index].firstChild);
            itemPrice[index].style.display = 'block';
            mainGrid[index].removeChild(mainGrid[index].firstChild);
        } else {
            plateImgHeading[index].style.display = 'none';
            itemPrice[index].style.display = 'none';
            const createPriceDiv = document.createElement('div');
            createPriceDiv.classList.add('item-rating');
            createPriceDiv.innerHTML = `Price: $${price}`;
            mainGrid[index].prepend(createPriceDiv);
            const createSpan = document.createElement('span');
            createSpan.classList.add('item-rating');
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
