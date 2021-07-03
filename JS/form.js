const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const checkbox = document.getElementById("checkbox");
const textArea = document.getElementById("textArea");
const role = document.getElementById("role");

let people = [];

form.addEventListener("submit", (e) => {
  e.preventDefault(); // to stop the form submitting

  if (checkInput()) {
    alert("Form Submitted Successfully!");
    updateInfo(e);
  }
});

function checkInput() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const stateValue = state.value.trim();
  const zipValue = zip.value.trim();
  const emailAddressValue = emailAddress.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const ageValue = age.value.trim();
  const heightValue = height.value.trim();
  const textAreaValue = textArea.value.trim();
  const roleValue = role.value.trim();

  // Firstname and Lastname validation
  firstnameValue === "" ? setErrorFor(firstname) : setSuccessFor(firstname);
  lastnameValue === "" ? setErrorFor(lastname) : setSuccessFor(lastname);

  // Email address validation
  if (validateEmail(emailAddressValue)) {
    setSuccessFor(emailAddress);
  } else {
    setErrorFor(emailAddress);
    console.log("1111");
    return false;
  }

  // Phone Number validation
  if (isNaN(phoneNumberValue) || phoneNumberValue.length != 10) {
    setErrorFor(phoneNumber);
    return false;
  } else {
    setSuccessFor(phoneNumber);
  }

  return true;
}

function setErrorFor(input) {
  input.className = "form-control is-invalid"; //.form-control
  console.log("Error");
}

function setSuccessFor(input) {
  input.className = "form-control is-valid"; //.form-control
  // console.log("Success");
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function updateInfo(e) {
  let person = {
    id: Date.now(),
    firstname: firstname.value.trim(),
    lastname: lastname.value.trim(),
    address: address.value.trim(),
    city: city.value.trim(),
    state: state.value.trim(),
    zip: zip.value.trim(),
    emailAddress: emailAddress.value.trim(),
    phoneNumber: phoneNumber.value.trim(),
    age: age.value.trim(),
    height: height.value.trim(),
    textArea: textArea.value.trim(),
    role: role.value.trim(),
  };

  people.push(person); // fomate data into Object for backend

  document.forms[0].reset(); // to clear the form for the next entries

  console.log("people", people);

  localStorage.setItem("AuditionApplicantList", JSON.stringify(people)); // storing in local storage
}
