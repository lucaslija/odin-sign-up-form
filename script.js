const pw = document.getElementById("user-password");
const pwConfirm = document.getElementById("user-confirm");
const pwError = document.getElementById("pw-error");
const submit = document.getElementById("submit");

function passwordValidate() {
  if (pw.value != pwConfirm.value) {
    pw.style.borderColor = "red";
    pwConfirm.style.borderColor = "red";

    pwError.innerText = "*Passwords do not match";
  } else {
    pw.style.borderColor = "green";
    pwConfirm.style.borderColor = "green";

    pwError.innerText = "";
  }
}

pwConfirm.addEventListener("input", passwordValidate);