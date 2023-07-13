const emailInput = document.getElementById("email"),
  phoneNumInput = document.getElementById("tel"),
  passwordInput = document.getElementById("password"),
  login = document.getElementById("loginButton"),
  signup = document.getElementById("signUp");

// Handling LogIn
const tryLogIn = (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    phoneNumber: emailInput.value,
    password: passwordInput.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "http://ecoguard.us-east-1.elasticbeanstalk.com/api/v1/auth/login",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      sessionStorage.setItem("isLoggedIn", result.token);
      window.location = "../Pages/services.html";
    })
    .catch((error) => console.log("error", error));
};
login.addEventListener("click", tryLogIn);

// Handling SignUp
const trySignUp = (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: emailInput.value,
    phoneNumber: phoneNumInput.value,
    password: passwordInput.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "http://ecoguard.us-east-1.elasticbeanstalk.com/api/v1/auth/signup",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      window.location = "../Pages/otp.html";
    })
    .catch((error) => console.log("error", error));
};
signup.addEventListener("click", trySignUp);
