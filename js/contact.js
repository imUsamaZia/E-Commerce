const formValidation = function (e) {
  const storedData = localStorage.getItem('formData');
  const getData = (storedData && JSON.parse(storedData)) || [];
  let firstName = e.target.firstName.value;
  let lastName = e.target.lastName.value;
  let mail = e.target.email.value;
  let phoneNumber = e.target.phoneNumber.value;

  if (!firstName.trim()) {
    alert('Enter your first name');
    return;
  }
  if (!lastName.trim()) {
    alert('Enter your last name');
    return;
  }
  if (!mail.trim() || !emailvalidation(mail)) {
    alert('Enter a valid email');
    return;
  }
  if (!phoneNumber.trim() || !phoneNumberValidation(phoneNumber)) {
    alert('Enter a valid phone number');
    return;
  }

  const formDataEntry = {
    firstName: firstName,
    lastName: lastName,
    email: mail,
    phoneNumber: phoneNumber,
  };

  getData.push(formDataEntry);

  localStorage.setItem('formData', JSON.stringify(getData));
  e.target.reset()
  alert('Message sent successfully');
};
 const emailvalidation = function (email) {
    const mailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return mailTest.test(email);
  };
  
  const phoneNumberValidation = function (phoneNumber) {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phoneNumber);
  };
document.querySelector('.send-message').addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation(e);
});
