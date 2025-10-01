document.addEventListener("DOMContentLoaded", () => {
  // Переход с Sign Up на Sign In
  const signInLink = document.querySelector(".sign_in");
  if (signInLink) {
    signInLink.addEventListener("click", () => {
      window.location.href = "sign_in.html";
    });
  }

  // Переход с Sign In на Sign Up
  const signUpButton = document.querySelector(".sign_up_button");
  if (signUpButton) {
    signUpButton.addEventListener("click", () => {
      window.location.href = "sign_up.html";
    });
  }

  // Вход: проверка username / password
  const loginBtn = document.getElementById("login_button");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // простая проверка
      if (username === "admin" && password === "1234") {
        window.location.href = "home.html";
      } else {
        alert("❌ Неверный логин или пароль!");
      }
    });
  }
});
