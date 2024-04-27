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
  