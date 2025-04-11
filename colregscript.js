function validateForm() 
{
    var fullname = document.getElementById('fullname').value;
    var date = document.getElementById('date').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value
    var age = document.getElementById('age').value
    var address = document.getElementById('address').value
    var state = document.getElementById('state').value
    var district = document.getElementById('district').value

    if (fullname === "") {
        displayError('fullnameError', 'fullname is required');
        return false;
    }
    if (containsNumbers(fullname)) {
        displayError('fullnameError', 'fullname should not contain numbers');
        return false;
    } else {
        displaySuccess('fullnameError', 'fullname is valid');
    }
    if (!isValidfullname(fullname)) {
        displayError('fullnameError', 'fullname should not contain special characters');
        return false;
    } else {
        displaySuccess('fullnameError', 'fullname is valid');
    }

    if (date === ""){
        displayError('dateError', 'Dateofbirth is required');
        return false;
    }else {
        displaySuccess('dateError', 'dateofbirth is valid');
    }

    if (email === "") {
        displayError('emailError', 'email is required');
        return false;
    }
    if (!isValidEmail(email)) {
        displayError('emailError', 'Invalid email address');
        return false;
    } else {
        displaySuccess('emailError', 'Email is valid');
    }
    if (password === "") {
        displayError('uppercaseError', '');
        displayError('lowercaseError', '');
        displayError('specialCharError', '');

        displayError('passwordError', 'Password is required');
        return false;
    }
    if (!containsUppercase(password)) {
        displayError('uppercaseError', 'Password must contain at least one uppercase letter');
    } else {
        displaySuccess('uppercaseError', '');
    }
    if (!containsLowercase(password)) {
        displayError('lowercaseError', 'Password must contain at least one lowercase letter');
    } else {
        displaySuccess('lowercaseError', '');
    }
    if (!containsSpecialChar(password)) {
        displayError('specialCharError', 'Password must contain at least one special character');
    } else {
        displaySuccess('specialCharError', '');
    }

    if (password.length < 8) {
        displayError('passwordError', 'Password should be at least 8 characters long');
        return false;
    } else {
        displaySuccess('passwordError', 'Password is valid');
    }


    if (phone === "") {
        displayError('phoneError', 'Phone number is required');
        return false;
    }
    if (!isValidPhone(phone)) {
        displayError('phoneError', 'Invalid phone number');
        return false;
    } else {
        displaySuccess('phoneError', 'Phone number is valid');
    }
    if (gender === "") {
        displayError('genderError', 'gender is required');
        return false;
    }else if (gender !== 'male' && gender !=='female' && gender !=='other'){
        displayError('genderError', 'Invalid gender');
        return false;
    }else {
        displaySuccess('genderError', 'gender is valid');
    }
    if (age === "") {
        displayError('ageError', 'age is required');
        return false;
    }
    if (age < 17) {
        displayError('ageError', 'Invalid age');
        return false;
    } else {
        displaySuccess('ageError', 'age is valid');
    }
    if (!isValidage(age)) {
        displayError('ageError', 'Invalid age');
        return false;
    } else {
        displaySuccess('ageError', 'age is valid');
    }
    if (address === "") {
        displayError('addressError', 'address is required');
        return false;
    }else {
        displaySuccess('addressError', 'address is valid');
    }
    if (state === "") {
        displayError('stateError', 'state is required');
        return false;
    }else {
        displaySuccess('stateError', 'state is valid');
    }
    if (district === "") {
        displayError('districtError', 'district is required');
        return false;
    }else {
        displaySuccess('districtError', 'district number is valid');
    }
    return true;
}

function displayError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.innerHTML = message;
    errorElement.className = 'error';
}

function displaySuccess(id, message) {
    var successElement = document.getElementById(id);
    successElement.innerHTML = message;
    successElement.className = 'success';
}

function containsNumbers(input) {
    return /\d/.test(input);
}

function isValidfullname(fullname){
    var userRegex = /^([a-zA-Z]+)\S.([a-zA-Z]+)$/;
    return userRegex.test(fullname);
}

function isValidEmail(email) {
    var emailRegex = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
    return emailRegex.test(email);
}
function containsUppercase(input) {
    return /[A-Z]/.test(input);
}

function containsLowercase(input) {
    return /[a-z]/.test(input);
}

function containsSpecialChar(input) {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(input);
}

function isValidPassword(password) {
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    return passwordRegex.test(password);
}

function isValidPhone(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
function isValidage(age) {
    var ageRegex = /^\d{2}$/;
    return ageRegex.test(age);
}