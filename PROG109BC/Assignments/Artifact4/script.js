// Creating A JS file with a function of validation Line item 5//
function validateForm(){
  var letter = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  var errorMessages = "";
  var errorMessageshere = "";
  // Checking First Name Variable
  var validFirstname = false; // Step 1: Create variables
  var errorMessagesfn = ""; //  Create the custome Error message for it
  var firstname = document.getElementById("FirstName").value; // Step 2: Read value from HTML
  // Checking Last Name Variable
  var validLastName = false; // Step 1: Create variables
  var errorMessagesln = ""; //  Create the custome Error message for it
  var LastName = document.getElementById("LastName").value; // Step 2: Read value from HTML
  //Checking Email Variable
  var validEmail = false;
  var errorMessagesem = "";
  var userEmail = document.getElementById("EMail").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  // Checking Phone Variables
  var validPhone = false;
  var phone = document.getElementById("Phone").value;
  var errorMessagesph = "";
  // Checking Username Variables
  var validUsername = false; // Step 1: Create variables
  var errorMessagesus = ""; //  Create the custome Error message for it
  var Username = document.getElementById("Username").value; // Step 2: Read value from HTML
  // Checking Password Variable
  var validUserPassword = false; // Step 1: Create variables
  var errorMessagesps = ""; //  Create the custome Error message for it
  var UserPassword = document.getElementById("Password").value; // Step 2: Read value from HTML but didnt need
  // Checking Address
  var validAddress = false; // Step 1: Create variables
  var errorMessagesad = ""; //  Create the custome Error message for it
  var Address = document.getElementById("Address").value; // Step 2: Read value from HTML
  // Checking City
  var validCity = false; // Step 1: Create variables
  var errorMessagesci = ""; //  Create the custome Error message for it
  var City = document.getElementById("City").value; // Step 2: Read value from HTML
  // State
  var validState = false; // Step 1: Create variables
  var errorMessagesst = ""; //  Create the custome Error message for it
  var State = document.getElementById("State").value; // Step 2: Read value from HTML
  // Zipcode Var
  var validZipcode = false;
  var ValidZipcodenonusa = false;
  var Zipcode = document.getElementById("Zipcode").value;
  var errorMessageszi = "";
  // Country
  var validCountry = false; // Step 1: Create variables
  var errorMessagesco = ""; //  Create the custome Error message for it
  var Country = document.getElementById("Country").value; // Step 2: Read value from HTML

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
  // alert(validFirstname)
  // LAST NAME Validation
  if (LastName === null || LastName === "" || LastName.length > 50) {
    errorMessages +=
      "<p>The Last Name is required and cannot be greater than 50 characters</p>";
    errorMessagesln +=
      "<p>The Last Name is required and cannot be greater than 50 characters</p>";
  } else if (!letter.test(LastName)) {
    errorMessages +=
      "<p>The Last Name should only contain alphabetical characters</p>";
    errorMessagesln +=
      "<p>The Last Name should only contain alphabetical characters</p>";
  } else {
    validLastName = true;
  }
  // Email Checking
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
    errorMessagesem += "<p>Invalid email</p>";
  } else {
    validEmail = true;
  }
  // Phone Validation
  // TODO  I challenge you to auto insert dashes (-) between area code, prefix, and line number, and validate as such. (1 extra credit point)
  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
    errorMessages +=
      "<p>The Phone must be less than 15 characters and it is required</p>";
    errorMessagesph +=
      "<p>The Phone must be less than 15 characters and it is required</p>";
  } else {
     validPhone = true;
  }
  // checking Username
  if (Username === null || Username === "" || Username.length > 13) {
    errorMessages +=
      "<p>The Username is required and cannot be greater than 12 characters</p>";
    errorMessagesus +=
      "<p>The Username is required and cannot be greater than 12 characters</p>";
  } else {
    validUsername = true;
  }

  // Password Checking doing it the way in the video to try this method out.
  // TODO Add Extra Credit High number and Uppercase andsfv
  // Stack over flow recommends !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/)

  if (
    myContact.Password.value === "" ||
    myContact.Password.value == null ||
    myContact.Password.value.length > 8
  ) {
    errorMessages +=
      "<p>The password must be less than 7 characters and it is required</p>";
    errorMessagesps +=
      "<p>The password must be less than 7 characters and it is required</p>";
  } else {
    validUserPassword = true;
  }
  // Checking Address
  if (Address === null || Address === "") {
    errorMessages += "<p>The Address is required and cannot be Blank</p>";
    errorMessagesad += "<p>The Address is required and cannot be Blank</p>";
  } else {
    validAddress = true;
  }
  //Checking City
  if (City === null || City === "") {
    errorMessages += "<p>The Address is required and cannot be Blank</p>";
    errorMessagesci += "<p>The Address is required and cannot be Blank</p>";
  } else {
    validCity = true;
  }
  // Checking State
  if (State === null || State === "" || State == "000") {
    errorMessages += "<p>The State is required and cannot be Blank</p>";
    errorMessagesst += "<p>The State is required and cannot be Blank</p>";
  } else {
    validState = true;
  }
  
   // Country
  if (Country === null || Country === "" || Country == '000') {
    errorMessages += "<p>The Country is required and cannot be Blank</p>";
    errorMessagesco += "<p>The Country is required and cannot be Blank</p>";
  } else {
    validCountry = true;
  }
  
  // Zipcode
  if (Country === "001"){
    if (
      isNaN(Zipcode) ||
      Zipcode.length > 5 ||
      Zipcode === null ||
      Zipcode === ""
    ) {
      errorMessages +=
        "<p>The Zipcode must be less than 5 number and it is required</p>";
      errorMessageszi +=
        "<p>The Zipcode must be less than 5 number and it is required</p>";
    } else {
       validZipcode = true;
    }
  } else { 
     validZipcode = true;
  }
  

  // Step 4: Send error message to Div on page and Their areas
  if (errorMessages !== ""){
    errorMessageshere += "<h3>Please Correct the following errors!</h3>";
  }
  document.getElementById("errorMessageshere").innerHTML = errorMessageshere;
  document.getElementById("errorMessages").innerHTML = errorMessages; // Primary
  document.getElementById("errorMessagesfn").innerHTML = errorMessagesfn; // First
  document.getElementById("errorMessagesln").innerHTML = errorMessagesln; // Last
  document.getElementById("errorMessagesem").innerHTML = errorMessagesem; // Email
  document.getElementById("errorMessagesph").innerHTML = errorMessagesph; // Phone
  document.getElementById("errorMessagesus").innerHTML = errorMessagesus; // Username
  document.getElementById("errorMessagesps").innerHTML = errorMessagesps; // Password
  document.getElementById("errorMessagesad").innerHTML = errorMessagesad; // Address
  document.getElementById("errorMessagesci").innerHTML = errorMessagesci; // City
  document.getElementById("errorMessagesst").innerHTML = errorMessagesst; // State
  document.getElementById("errorMessageszi").innerHTML = errorMessageszi; // Zip
  document.getElementById("errorMessagesco").innerHTML = errorMessagesco; //Country

  // Step 5: return status
  return validFirstname && validLastName && validEmail && validPhone && validUsername && validUserPassword && validAddress && validCity && validState && validZipcode && validCountry;
}
