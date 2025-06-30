const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";

  const emailVal = email.value.trim();
  const passVal = password.value.trim();

  let isValid = true;

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  // Password validation
  if (passVal.length < 8 || !/\d/.test(passVal) || !/[!@#$%^&*]/.test(passVal)) {
    passwordError.textContent = "Password must be 8+ characters, include a number & symbol";
    isValid = false;
  }

  if (isValid) {
    // Simulated API response
    setTimeout(() => {
      form.style.display = "none";
      confirmation.classList.remove("hidden");
    }, 500);
  }
});
