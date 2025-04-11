function validateForm() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value;

    if (username === "") {
        displayError('usernameError', 'Username is required');
        return false;
    }
    if (containsNumbers(username)) {
        displayError('usernameError', 'Username should not contain numbers');
        return false;
    }
    if (!isValidUsername(username)) {
        displayError('usernameError', 'Username should not contain special characters');
        return false;
    }
    displaySuccess('usernameError', 'Username is valid');

    if (password === "") {
        clearPasswordErrors();
        displayError('passwordError', 'Password is required');
        return false;
    }

    let isValid = true;

    if (!containsUppercase(password)) {
        displayError('uppercaseError', 'Password must contain at least one uppercase letter');
        isValid = false;
    } else {
        displaySuccess('uppercaseError', '');
    }

    if (!containsLowercase(password)) {
        displayError('lowercaseError', 'Password must contain at least one lowercase letter');
        isValid = false;
    } else {
        displaySuccess('lowercaseError', '');
    }

    if (!containsSpecialChar(password)) {
        displayError('specialCharError', 'Password must contain at least one special character');
        isValid = false;
    } else {
        displaySuccess('specialCharError', '');
    }

    if (password.length < 8) {
        displayError('passwordError', 'Password should be at least 8 characters long');
        isValid = false;
    } else if (isValid) {
        displaySuccess('passwordError', 'Password is valid');
    }

    if (!isValid) return false;
    if (username === 'selvaganesh' && password === 'Selva123@') {
        alert("Success!");
        window.location.assign("./home.html");
    } else {
        alert("Wrong entry");
    }
    return false;
}

function displayError(id, message) {
    var element = document.getElementById(id);
    element.innerHTML = message;
    element.className = 'error';
}

function displaySuccess(id, message) {
    var element = document.getElementById(id);
    element.innerHTML = message;
    element.className = 'success';
}

function clearPasswordErrors() {
    displayError('uppercaseError', '');
    displayError('lowercaseError', '');
    displayError('specialCharError', '');
}

function containsNumbers(input) {
    return /\d/.test(input);
}

function isValidUsername(username) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(username);
}

function containsUppercase(input) {
    return /[A-Z]/.test(input);
}

function containsLowercase(input) {
    return /[a-z]/.test(input);
}

function containsSpecialChar(input) {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/.test(input);
}
