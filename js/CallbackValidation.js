
function validateForm(event) {
    event.preventDefault();

    var phone = document.getElementById('callback-phone').value;
    var topic = document.getElementById('callback-topic').value;

    var phoneError = document.getElementById('phone-error');
    var topicError = document.getElementById('topic-error');

    phoneError.textContent = '';
    topicError.textContent = '';

    var phonePattern = /^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;

    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Пожалуйста, введите номер телефона в формате +7 (123)-456-78-90.";
        return false;
    }

    if (topic.trim() === "") {
        topicError.textContent = "Пожалуйста, опишите ваш вопрос или тему обращения.";
        return false;
    }

    alert("Форма отправлена успешно!");
    return true;
}
