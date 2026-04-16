function checkvalidation() {
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;
 if (!email.includes("@") || !email.includes(".")) {
    alert("Email wrong");
    return false;
  }

  if (pass.length < 8) {
    alert("Password must be 8");
    return false;
  }
}