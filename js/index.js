
  // code for product section
  const btnPrimary = document.querySelectorAll('.product-btn-primary');
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
                  <h1>Thanks for purchasing</h1>
                  <div style="font-size: 2rem; text-align: center;">😊</div>`;
              creatPrice.style.color = 'white';
              creatPrice.style.fontSize = '1.5rem';

              mainGrid[index].prepend(creatPrice);
          }

          showText = !showText;
      });
  });



const testimonial = document.querySelectorAll('.testymonial1');
let isDragging = false;
let startX, currentX, deltaX;
let counter = 0;

const setLeftValues = () => {
    const leftPercentage = window.innerWidth < 768 ? 100 : 25;
    testimonial.forEach((card, index) => {
        card.style.left = `${index * leftPercentage}%`;
    });
};
setLeftValues(); 
window.addEventListener('resize', setLeftValues);
const moveForward = function () {
    if (counter < testimonial.length - 1) {
        counter++;
        slideCard();
    }
};
const moveBackward = function () {
    if (counter > 0) {
        counter--;
        slideCard();
    }
};
const slideCard = function () {
    if (counter >= 0 && counter < testimonial.length) {
        testimonial.forEach((card, index) => {
            card.style.transform = `translateX(-${counter * 100}%)`;
        });
    }
};
const buttons = document.querySelectorAll('.moveable-btn button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(otherButton => {
            if (button === otherButton) {
                otherButton.style.backgroundColor = 'transparent';
                otherButton.style.color = 'var(--accent-color)';
            } else {
                otherButton.style.backgroundColor = 'var(--accent-color)';
                otherButton.style.color = 'var(--secondary-white-heading)';
            }
        });
    });
});
document.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
});
document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        currentX = event.clientX;
        deltaX = startX - currentX;
        if (Math.abs(deltaX) > 20) {
            deltaX > 0 ? moveForward() : moveBackward();
            isDragging = false;
        }
    }
});
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// for footer email
document.addEventListener('DOMContentLoaded', function() {
    const getData = localStorage.getItem('userData');
    let inputData = getData ? JSON.parse(getData) : [];

    if (!window.footerForm) {
        const footerForm = document.querySelector('#footer-form');

        if (footerForm) {
            footerForm.addEventListener('submit', function(e) {
                e.preventDefault(); 

                const email = document.getElementById("emailInput").value;

                if (!isValidEmail(email)) {
                    alert("Please enter a valid email address");
                    return false;
                }

                const userEmail = {
                    email: email
                };

                inputData.push(userEmail);
                localStorage.setItem('userData', JSON.stringify(inputData));
                footerForm.reset();
            });

            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }

            window.footerForm = footerForm;
        }
    }
});
// for header side bar

document.addEventListener('DOMContentLoaded', function () {
    let sidebar = document.querySelector('.top-bar-dropdown');
    const toggleBar = document.querySelector('.image-bar');
    let condition = false;

    toggleBar.addEventListener('click', (e) => {
        if (condition) {
            hideSidebar();
        } else {
            showSidebar();
        }
        e.stopPropagation(); // Prevent the click event from reaching the window
    });

    window.addEventListener('click', (e) => {
        if (condition && !sidebar.contains(e.target) && e.target !== toggleBar) {
            hideSidebar();
        }
    });

    function showSidebar() {
        sidebar.style.right = '0';
        condition = true;
    }

    function hideSidebar() {
        sidebar.style.right = '-323px';
        condition = false;
    }

    if (sidebar) {
        hideSidebar();
    } else {
        console.error('Sidebar element not found.');
    }
});
