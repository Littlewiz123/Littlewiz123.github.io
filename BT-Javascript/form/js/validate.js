let accounts = [
    {
        email: "abc@gmail.com",
        password: "abc123456"
    },
    {
        email: "admin@gmail.com",
        password: "admin12345"
    }
]

function validateForm() {
    var isFormValid = true;
    isFormValid &= checkBlankSpaceEmail();
    isFormValid &= checkBlankSpacePassword();
    isFormValid &= checkEmailAndPasswordForLogin();
    return isFormValid? true:false;
}

function checkBlankSpaceEmail() {
    if ($("#email")[0].value == "") {
        $("#error1").html("Fill in email");
        return false;
    } else {
        $("#error1").html("");
        return true;
    }
}

function checkBlankSpacePassword() {
    if ($("#password")[0].value == "") {
        $("#error2").html("Fill in password");
        return false;
    } else {
        $("#error2").html("");
        return true;
    }
}

function checkEmailAndPasswordForLogin() {
    let login;
    for (let i = 0; i<accounts.length; i++) {
        if ($("#email")[0].value == accounts[i].email && $("#password")[0].value == accounts[i].password) {
            $("#error1").html("");
            $("#error2").html("");
            login = true;
        }
        else if ($("#email")[0].value == accounts[i].email && $("#password")[0].value != accounts[i].password) {
            $("#error1").html("");
            $("#error2").html("Password not correct! Please enter again.");
            login = false; 
        }
        else if ($("#email")[0].value != accounts[i].email && $("#password")[0].value == accounts[i].password) {
            $("#error1").html("Email not correct! Please enter again.");
            $("#error2").html("");
            login = false; 
        }
    }
    return login;
}