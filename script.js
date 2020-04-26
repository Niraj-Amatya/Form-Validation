// get dom for form, and all the inputs
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// when the form is filled for success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// show input error message when the box is empty
function showError(input, message) {
    // parentElement will link the current element to its parent element.
    // will connect to parent which is form-control for the input which is usernam
    // this will make sure when there error the box turns red
    const formControl = input.parentElement;
    //   overwriting the form-contol classname and adding error class to it. when error is used it will also show the error message as it was hidden before in css
    formControl.className = "form-control error";
    //   selecting error message by selecting element 'small'
    const small = formControl.querySelector("small");
    //   passing the message argument to 'small'
    small.innerHTML = message;
}


// function to convert the input.id to uppercase, but only the first letter
function getFieldName(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

// checking validity of email
function checkEmail(input) {
    const regualarExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // checking if email is valid against the regular expression
    if (input.value.length === 0) {
        showError(input, `${getFieldName(input.id)} is required`);
    } else if (regualarExpression.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid")
    }
}

// check Password validation

function checkPasswordValidation(input) {
    const regexCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (regexCheck.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "password:6-16 characters, atleast one number and one special charater and one uppercase ");

    }

}


// function to confirm the password by matching second password to initial password
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password do not match");
    } else showSuccess(input2);

}

// function to check all the field
function checkAllTheField(inputArray) {
    inputArray.forEach(function (input) {
        // checks if the value of all the field is empty, trim will clear the white space
        if (input.value.trim() === '') {
            // calling showError function and using es6 template string: back tick 
            // inside it calling a function to uppercase the input id for differnt field . Inpu id is the id for the fields like username, email, password, password2
            showError(input, `${getFieldName(input.id)} is required`);

        } else {
            showSuccess(input);
        }
    });


}


// function to check the length of username and password
function checkLength(input, min, max) {
    if (input.value.length === 0) {
        showError(input, `${getFieldName(input.id)} is required`);

    } else if (input.value.length < min) {
        showError(input, `${getFieldName(input.id)} must be more than ${min} character`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input.id)} must be less than ${max} character`);
    } else {
        showSuccess(input)
    }
}



// add eventlistener while submiting in the event
form.addEventListener("submit", (event) => {
    // this will prevent default refresh behaviour of browser while submitting
    event.preventDefault();
    // when username value  is empty calling showError message to show error message

    //   will call the function checkAllTheField that will take all the arguments
    checkAllTheField([username, email, password, password2])

    // check the length of username 
    checkLength(username, 3, 15);
    // // check the length of password
    // checkLength(password, 6, 25);

    // check validity of an email
    checkEmail(email);

    // check password validation
    checkPasswordValidation(password);

    // check password matches
    checkPasswordMatch(password, password2);


});

// id/else to deal with error and success