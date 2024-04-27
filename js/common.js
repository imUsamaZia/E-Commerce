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




// let sidebar = document.querySelector('.top-bar-dropdown');
// const toggleBar = document.querySelector('.bar');
// let condition = true;

// toggleBar.addEventListener('click', (e) => {
//     toggleSidebar();
// });

// function toggleSidebar() {
//     if (condition) {
//         sidebar.style.right = '0';
//     } else {
//         sidebar.style.right = '-323px';
//     }
//     condition = !condition;
// }

// window.addEventListener('scroll', () => {
//     if (!condition) {
//         toggleSidebar();
//     }
// });

// if (sidebar) {
//   toggleSidebar();
// } else {
// }

let sidebar = document.querySelector('.top-bar-dropdown');
const toggleBar = document.querySelector('.bar');
let condition = false; 

toggleBar.addEventListener('click', (e) => {
    toggleSidebar();
});

window.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== toggleBar) {
        hideSidebar();
    }
});

function toggleSidebar() {
    if (condition) {
        showSidebar();
    } else {
        hideSidebar();
    }
    condition = !condition;
}

function showSidebar() {
    sidebar.style.right = '0';
}

function hideSidebar() {
    sidebar.style.right = '-323px';
    condition = false;
}

if (sidebar) {
    hideSidebar(); 
} else {
}





