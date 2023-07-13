const yesRadio = document.getElementById("request-yes"),
  noRadio = document.getElementById("request-no"),
  quantityField = document.getElementById("quantity-field"),
  pickupAddress = document.getElementById("location"),
  pickUpArea = document.getElementById("lga"),
  submitButton = document.getElementById("completeButton");

function showQuantityField() {
  const quantityField = document.getElementById("quantity-field");
  quantityField.style.display = "inline-block";
}

function hideQuantityField() {
  const quantityField = document.getElementById("quantity-field");
  quantityField.style.display = "none";
}

yesRadio.addEventListener("click", showQuantityField);
noRadio.addEventListener("click", hideQuantityField);

const trySchedule = (e) => {
  console.log("clicked");
  e.preventDefault();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtcnBoaWx1czFAZ21haWwuY29tIiwiaWF0IjoxNjg5MjMzMzE3LCJleHAiOjE2ODkzMTk3MTd9.8c8stNQZEIRv2rnMzRn_WBQzOoqpf3xIh5HepnFhGCmro9QulgQ9XaWnNwxyauXUih6wsqu4LbmMJIEsDJvR0g"
  );

  var raw = JSON.stringify({
    binRequestDto: {
      requestStatus: true,
      binQuantity: quantityField.value,
    },
    refLocationId: 1,
    scheduleDto: {
      pickupAddress: pickupAddress.value,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "http://ecoguard.us-east-1.elasticbeanstalk.com/api/v1/schedule/waste/pickUp/24",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
submitButton.addEventListener("click", trySchedule);
