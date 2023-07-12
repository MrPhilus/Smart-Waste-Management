const logStatus = document.getElementById("logStatus"),
  disposalButton = document.getElementById("disposal"),
  recycleButton = document.getElementById("recycle"),
  walletButton = document.getElementById("wallet"),
  historyButton = document.getElementById("history");

disposalButton.addEventListener("click", function redirect() {
  if (checkStatus()) {
    window.location = "./Schedule.html";
  } else {
    window.location = "./Forms.html";
  }
});
if (checkStatus()) {
  logStatus.innerText = "Log Out";
} else {
  logStatus.innerText = "Log In";
}
logStatus.addEventListener("click", () => {
  sessionStorage.clear();
});

function checkStatus() {
  const token = sessionStorage.getItem("isLoggedIn");
  if (token) {
    return token;
  } else return false;
}
