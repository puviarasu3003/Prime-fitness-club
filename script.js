document.getElementById("forming").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();

  let dateofbirth = document.getElementById("DOB").value.trim();
  let age = document.getElementById("Age").value.trim();
  let height = document.getElementById("Height").value.trim();
  let weight = document.getElementById("Weight").value.trim();
  let gender = document.getElementById("Gender").value.trim();
  let occupation = document.getElementById("Occupation").value.trim();
  let Injuries = document.getElementById("Injuries").value.trim();
  let phonenumber = document.getElementById("Mobile").value.trim();
  let gmail = document.getElementById("mail").value.trim();
  let address = document.getElementById("Address").value.trim();

  let nameerror = document.getElementById("name-error");

  let doberror = document.getElementById("dob-error");
  let ageerror = document.getElementById("age-error");
  let heighterror = document.getElementById("height-error");
  let weighterror = document.getElementById("weight-error");
  let gendererror = document.getElementById("Gender-error");
  let occupationerror = document.getElementById("Occupation-error");
  let injurieserror = document.getElementById("Injuries-error");
  let mobileerror = document.getElementById("mobile-error");
  let mailerror = document.getElementById("mail-error");
  let addresserror = document.getElementById("adress-error");

  let namepatter = /^[A-Za-z]+ [A-Za-z]+$/;
  if (name === "") {
    nameerror.innerText = "*Name is required";
  } else if (!namepatter.test(name)) {
    nameerror.innerText = "*enter full name";
  } else if (namepatter.test(name)) {
    nameerror.innerText = "";
  }
  let dobpattern = /^$/;
  if (dateofbirth === "") {
    doberror.innerText = "*DOB is required";
  } else if (!dobpattern.test(dateofbirth)) {
    doberror.innerText = "";
  }
  if (age === "") {
    ageerror.innerText = "*Age is required";
  } else if (age.length > 2) {
    ageerror.innerText = "*enter your correct age";
  } else if (age.length < 3) {
    ageerror.innerText = "";
  }

  if (height === "") {
    heighterror.innerText = "*Height is required(CM)";
  } else if (Number(height) > 220 || Number(height) < 50) {
    heighterror.innerText = "*enter your correct height";
  } else if (Number(height) < 220 || Number(height) > 50) {
    heighterror.innerText = "";
  }
  if (weight === "") {
    weighterror.innerText = "*Weight is required";
  } else if (Number(weight) > 150 || Number(weight) < 10) {
    weighterror.innerText = "*enter your correct Weight";
  } else if (Number(weight) < 150 || Number(weight) > 10) {
    weighterror.innerText = "";
  }
  let genderpattern = /^[A-Za-z]{4,6}$/;
  if (gender === "") {
    gendererror.innerText = "*Gender is required";
  } else if (!genderpattern.test(gender)) {
    gendererror.innerText = "*please fill your gender";
  } else if (genderpattern.test(gender)) {
    gendererror.innerText = "";
  }
  let occupationpattern = /^[A-Za-z]$/;
  if (occupation === "") {
    occupationerror.innerText = "*Occupation is required";
  } else if (!occupationpattern.test(occupation)) {
    occupationerror.innerText = "";
  }
  let Injuriespattern = /^[A-Za-z]$/;
  if (Injuries === "") {
    injurieserror.innerText = "*Fill is box";
  } else if (!Injuriespattern.test(Injuries)) {
    injurieserror.innerText = "";
  }
  if (phonenumber === "") {
    mobileerror.innerText = "*Number is required";
  } else if (phonenumber.length > 10 || phonenumber.length < 10) {
    mobileerror.innerText = "*enter your correct number";
  } else if ((phonenumber.length = 10)) {
    mobileerror.innerText = "";
  }
  let mailpattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
  if (gmail === "") {
    mailerror.innerText = "*Email is required";
  } else if (!mailpattern.test(gmail)) {
    mailerror.innerText = "*enter correct Emailid with (@,.)";
  } else if (mailpattern.test(gmail)) {
    mailerror.innerText = "";
  }
  let addresspattern = /^[A-Za-z]$/;
  if (address === "") {
    addresserror.innerText = "*Address is required";
  } else if (!addresspattern.test(address)) {
    addresserror.innerText = "";
  }
});
