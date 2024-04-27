document.addEventListener('DOMContentLoaded', function() {
    const getData = localStorage.getItem('userData');
    let inputData = getData ? JSON.parse(getData) : [];
    const footerForm = document.querySelector('#footer-form');
    const logoMail = document.querySelector('.logo1-mail');

    logoMail.addEventListener('input', (e) => {
        e.preventDefault();
        console.log(e.target.value)
    });

    footerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById("emailInput").value;

        if (!email.trim() || !isValidEmail(email)) {
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
});

