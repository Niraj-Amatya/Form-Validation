// ******** this code is not dry and shows how it is hard coded. Look for script.js******




// get dom for form, and all the inputs
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//

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

// checking validity of email
function isValidEmail(email) {
  const checkEmailValidity = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return checkEmailValidity.test(String(email).toLowerCase());
}

// when the form is filled for success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// add eventlistener while submiting in the event
form.addEventListener("submit", (event) => {
  // this will prevent default refresh behaviour of browser while submitting
  event.preventDefault();
  // when username value  is empty calling showError message to show error message
  if (username.value === "") {
    showError(username, "Username is required.");
    // when there is some field filled in usernam calling showSuccess method to do something
  } else {
    showSuccess(username);
  }

  //   to check for email error and success
  if (email.value === "") {
    showError(email, "Email is required.");

    // to check if email is valid calls another method isValidEmail, which is a regex method
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");

    // when there is some field filled in username calling showSuccess method to do something
  } else {
    showSuccess(email);
  }

  //   password check error
  if (password.value === "") {
    showError(password, "Password is required.");
    // when there is some field filled in usernam calling showSuccess method to do something
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Password 2 is required.");
    // when there is some field filled in usernam calling showSuccess method to do something
  } else {
    showSuccess(password2);
  }
});

// id/else to deal with error and success
