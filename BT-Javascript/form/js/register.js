function validateForm() {
    var isFormValid = true;
    isFormValid &= checkBlankSpaceLastname();
    isFormValid &= checkBlankSpaceFirstname();
    isFormValid &= checkBlankSpaceBirthday();
    isFormValid &= checkBlankSpaceAddress();
    isFormValid &= checkBlankSpacePhonenumber();
    isFormValid &= checkPhonenumberLength();
    isFormValid &= checkBlankSpaceEmail();
    isFormValid &= checkBlankSpacePassword();
    isFormValid &= checkBlankSpaceRewrPassword();
    isFormValid &= doubleCheckPassword();
    return isFormValid? true:false;
}

function checkBlankSpaceLastname() {
    if ($("#lastname")[0].value == "") {
        $("#error1").html("Fill in lastname");
        return false;
    } else {
        $("#error1").html("");
        return true;
    }
}

function checkBlankSpaceFirstname() {
    if ($("#firstname")[0].value == "") {
        $("#error2").html("Fill in firstname");
        return false;
    } else {
        $("#error2").html("");
        return true;
    }
}

function checkBlankSpaceBirthday() {
    if ($("#birthday")[0].value == "") {
        $("#error3").html("Fill in birthday");
        return false;
    } else {
        $("#error3").html("");
        return true;
    }
}

function checkBlankSpaceAddress() {
    if ($("#address")[0].value == "") {
        $("#error4").html("Fill in address");
        return false;
    } else {
        $("#error4").html("");
        return true;
    }
}

function checkBlankSpacePhonenumber() {
    if ($("#phonenumber")[0].value == "") {
        $("#error5").html("Fill in phonenumber");
        return false;
    } else {
        $("#error5").html("");
        return true;
    }
}
function checkPhonenumberLength() {
    if ($("#phonenumber")[0].value.length == 10) {
        return true;
    } else {
        $("#error5").html("Phonenumber lenght wrong!");
        return false;
    }
}

function checkBlankSpaceEmail() {
    if ($("#email")[0].value == "") {
        $("#error6").html("Fill in email");
        return false;
    } else {
        $("#error6").html("");
        return true;
    }
}

function checkBlankSpacePassword() {
    if ($("#password")[0].value == "") {
        $("#error7").html("Fill in password");
        return false;
    } else {
        $("#error7").html("");
        return true;
    }
}

function checkBlankSpaceRewrPassword() {
    if ($("#rewr-password")[0].value == "") {
        $("#error8").html("Fill again your password");
        return false;
    } else {
        $("#error8").html("");
        return true;
    }
}

// function checkPasswordLength() {
//     if ($("#password")[0].value.length >= 8 && $("#password")[0].value.length <= 16) {
//         return true;
//     } else {
//         $("#error7").html("Password length wrong!");
//         return false;
//     }
// }

// function checkRewrPasswordLength() {
//     if ($("#rewr-password")[0].value.length >= 8 && $("#rewr-password")[0].value.length <= 16) {
//         return true;
//     } else {
//         $("#error8").html("Rewrite Password length wrong!");
//         return false;
//     }
// }

function doubleCheckPassword() {
    let password = $("#password")[0].value;
    if ($("#rewr-password")[0].value == password) {
        $("#error8").html("");
        return true;
    } else {
        $("#error8").html("Rewrite password not correct!");
        return false;
    }
}

