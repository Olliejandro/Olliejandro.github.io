function validateForm() {
  var letter = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  var errorMessages = "";
  var errorMessageshere = "";
  // Checking First Name Variable
  var validFirstname = false; // Step 1: Create variables
  var errorMessagesfn = ""; //  Create the custome Error message for it
  var firstname = document.getElementById("FirstName").value; // Step 2: Read value from HTML
  //Checking Email Variable
  var validEmail = false;
  var errorMessagesem = "";
  var userEmail = document.getElementById("EMail").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");

  // Step 3: Do validation for Firstname Variable
  if (firstname === null || firstname === "" || firstname.length > 20) {
    errorMessages +=
      "<p>The firstname is required and cannot be greater than 20 characters</p>";
    errorMessagesfn +=
      "<p>The firstname is required and cannot be greater than 20 characters</p>";
  } else if (!letter.test(firstname)) {
    errorMessages +=
      "<p>The firstname should only contain alphabetical characters</p>";
    errorMessagesfn +=
      "<p>The firstname should only contain alphabetical characters</p>";
  } else {
    validFirstname = true;
  }
  //EMAIL CHECK
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
    errorMessagesem += "<p>Invalid email</p>";
  } else {
    validEmail = true;
  }
  if (errorMessages !== "") {
    errorMessageshere += "<h3>Please Correct the following errors!</h3>";
  }
  document.getElementById("errorMessages").innerHTML = errorMessages; // Primary
  document.getElementById("errorMessagesfn").innerHTML = errorMessagesfn; // First
  document.getElementById("errorMessagesem").innerHTML = errorMessagesem; // Email

  // Rerutn
  return validFirstname && validEmail;
}
