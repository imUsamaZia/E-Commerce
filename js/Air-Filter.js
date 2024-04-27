// logic for tab system
const firstFilters = document.querySelectorAll('.first-filter');
firstFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const parentDiv = filter.closest('.sales-values');
    const filterLinksHidden = parentDiv.querySelectorAll('.filter-link-hidden');
    const filterLinksShow = parentDiv.querySelectorAll('.filter-link-show');
    const hiddenValue = parentDiv.dataset.hiddenValue === 'true' ? false : true;
    parentDiv.dataset.hiddenValue = hiddenValue; 
    filterLinksHidden.forEach((link) => {
      link.style.display = hiddenValue ? 'none' : 'block';
    });
    filterLinksShow.forEach((link) => {
      link.style.display = hiddenValue ? 'block' : 'none';
    });
  });
});

// logic for accordian section
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
            mollit anim id est laborum
        </p>
    `;

    acordion.appendChild(box1);
    acordion.appendChild(expandContent);
});
const arrows = document.querySelectorAll('.arrow-up');
arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const expandContent = arrow.parentElement.nextElementSibling;
        expandContent.classList.toggle('active');
        arrow.style.transform = expandContent.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';    });
});
