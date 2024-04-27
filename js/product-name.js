
//  Accordian section
const acordions = document.querySelectorAll('.acordion');

acordions.forEach(acordion => {
    const box1 = document.createElement('div');
    box1.classList.add('lorem-box1');
    box1.innerHTML = `
        <p class="lorem-content">Lorem ipsum dolor sit amet</p>
        <button class="fb-btn1 arrow-up">
            <img src="/image/file-expand-arrow.png" alt="" class="arrow-up">
        </button>
    `;

    const expandContent = document.createElement('div');
    expandContent.classList.add('expand-content');
    expandContent.innerHTML = `
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillu dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa q officia deserunt
            mollit anim id est
    `;

    acordion.appendChild(box1);
    acordion.appendChild(expandContent);
});

const arrows = document.querySelectorAll('.arrow-up');

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const expandContent = arrow.parentElement.nextElementSibling;
        expandContent.classList.toggle('actives');
        arrow.style.transform = expandContent.classList.contains('actives') ? 'rotate(180deg)' : 'rotate(0deg)';    });
});

// code for tab changing color 
const btnMinus = document.querySelectorAll('.btn-minus');
const btnPlus = document.querySelectorAll('.btn-plus');
const increasingNumber = document.querySelectorAll('.increasing-number');
const saleNumberLinks = document.querySelectorAll('.sale-number-link');

function updateColor(inputElement, newValue) {
  saleNumberLinks.forEach((link) => {
    link.style.backgroundColor = 'transparent';
  });

  const selectedLink= Math.min(Math.max(newValue - 1, 0), 5);
  saleNumberLinks[selectedLink].style.backgroundColor = '#d75d39';

}

saleNumberLinks.forEach((links, index) => {
  const input = increasingNumber[index];
  const btnPlusNumber = btnPlus[index];
  const btnMinusNumber = btnMinus[index];

  input.value = input.value || 0;

  btnPlusNumber.addEventListener('click', () => {
    const newValue = Math.min(parseInt(input.value, 10) + 1, 6);
    input.value = newValue;
    updateColor(input, newValue);
  });

  btnMinusNumber.addEventListener('click', () => {
    if (parseInt(input.value, 10) > 0) {
      const newValue = Math.max(parseInt(input.value, 10) - 1, 0);
      input.value = newValue;
      updateColor(input, newValue);
    }
  });
});








