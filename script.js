function checkEmail() {
  let email = document.getElementById("email").value;
  let cnfrmEmail = document.getElementById("cnfrm-email").value;

  console.log(" Email:", email, "\n", "Confirm Email:", cnfrmEmail);
  let message = document.getElementById("message");

  if (email.length != 0) {
    if (email == cnfrmEmail) {
      console.log("Emails Match");
    } else {
      message.textContent = "Emails don't match";
      message.style.color = "#ff4d4d";
    }
  } else {
    alert("Text field can't be empty!");
    message.textContent = "";
  }
}
