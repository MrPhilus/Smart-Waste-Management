const emailInput = document.getElementById("email"),
  phoneNumInput = document.getElementById("tel"),
  passwordInput = document.getElementById("password"),
  signup = document.getElementById("signUp");

const trySignUp = (e) => {
  e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: emailInput.value,
    phoneNumber: phoneNumInput.value,
    password: escape(passwordInput.value),
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
    .then((response) => response.text())
    .then((result) => {
      const userData = JSON.parse(result);
      console.log(userData);
      //   sessionStorage.setItem("isLoggedIn", result.token);
      userData.statusCode === "CREATED"
        ? (window.location = "../Pages/otp.html")
        : console.log("Check user details");
    })
    .catch((error) => console.log("error", error));
};
signup.addEventListener("click", trySignUp);

function escape(str) {
  // Escape all special characters that could be interpreted as code.
  return str.replace(/[&;"'<>\/\\|`]/g, "\\$&");
}
