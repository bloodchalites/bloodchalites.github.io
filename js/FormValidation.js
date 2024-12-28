
var form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) {
        error.innerHTML = '';
    });

    const country = document.getElementById('country').value.trim();
    const orgType = document.getElementById('org-type').value;
    const inn = document.getElementById('inn').value.trim();
    const fio = document.getElementById('fio').value.trim();
    const orgName = document.getElementById('org-name').value.trim();

    let isValid = true;

    if (!country) {
        document.getElementById('error-country').innerHTML = 'Пожалуйста, укажите страну.';
        isValid = false;
    }

    if (!orgType || orgType === "") {
        document.getElementById('error-org-type').innerHTML = 'Пожалуйста, выберите форму организации.';
        isValid = false;
    }

    if (!inn || !/^\d{10}$/.test(inn)) {
        document.getElementById('error-inn').innerHTML = 'ИНН должен быть 10 цифр.';
        isValid = false;
    }

    if (!fio) {
        document.getElementById('error-fio').innerHTML = 'Пожалуйста, укажите ФИО руководителя.';
        isValid = false;
    }

    if (!orgName) {
        document.getElementById('error-org-name').innerHTML = 'Пожалуйста, укажите наименование организации.';
        isValid = false;
    }

    if (isValid) {
        modal.style.display = "block";
    }
});
