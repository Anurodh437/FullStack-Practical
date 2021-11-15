const form = document.getElementById("forms");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
var msg = document.querySelector("small");

form.addEventListener('submit',function(e){
    e.preventDefault(); // stop data submission to server
    checkInput();
});

function checkInput()
{
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();

    if(userNameValue === "")
    {
        showError(username,"UserName can not be blank");
    }
    else if (!isUsernameValid(userNameValue)) {
        showError(username, "Username is not valid");
    } else {
        showSuccess(username);
    }


    if(emailValue === "")
    {
        showError(email,"Email can not be blank");
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email,"Email not in valid format")
    }
    else{
        showSuccess(email);
    }


    if (passwordValue === '') {
        showError(password, "Password can not be blank");
    } else {
        showSuccess(password);
    }
    if (confirmpasswordValue === '') {
        showError(confirmpassword, "Re enter your password");
    } else if (passwordValue != confirmpasswordValue) {
        showError(confirmpassword, "Passwords does not match");
    } else {
        showSuccess(confirmpassword);
    }
}

function showError(input,msg)
{
    const input_form = input.parentNode;
    input_form.className  = 'input_form error';
    const small = input_form.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input)
{
    const input_form = input.parentNode;
    input_form.className  = 'input_form success';
}

function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+){2,3}$/.test(email);
}

function isUsernameValid(username) {
    return /^([a-z0-9]+)$/.test(username);
}

