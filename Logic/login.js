const emailInput = document.getElementById("email"),
  phoneNumInput = document.getElementById("tel"),
  passwordInput = document.getElementById("password"),
  login = document.getElementById("loginButton"),
  signup = document.getElementById("signUp");

// Handling LogIn
const tryLogIn = (e) => {
  console.log("clicked");
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: emailInput.value,
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
    .then((response) => response.text())
    .then((result) => {
      const data = JSON.parse(result);
      console.log(data);
      sessionStorage.setItem("isLoggedIn", result.token);
      data.token
        ? (window.location = "../Pages/services.html")
        : console.log("Check details");
    })
    .catch((error) => console.log("error", error));
};
login.addEventListener("click", tryLogIn);
