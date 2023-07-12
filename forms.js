const emailInput = document.getElementById("email"),
  passwordInput = document.getElementById("password"),
  login = document.getElementById("loginButton");

const hello = (e) => {
  e.preventDefault();
  console.log(emailInput.value);
  console.log(passwordInput.value);

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
      window.location = "./services.html";
    })
    .catch((error) => console.log("error", error));
};

login.addEventListener("click", hello);
