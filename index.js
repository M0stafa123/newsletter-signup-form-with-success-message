let input = document.querySelector("input");
let singUp = document.querySelector(".Sign-up-form");
let finish = document.querySelector(".Success-message");
let btnSub = document.querySelector(".Sign-up-form button");
let btnDismiss = document.querySelector(".Success-message button");
let showEmail = document.querySelector(".display-email");
let label = document.querySelector("label");
btnSub.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    label.classList.add("err-empty");
  } else if (label.classList.contains("err-empty") || input.value !== "") {
    label.classList.remove("err-empty");
  }
  if (!/\w+@\w+.\w+/.test(input.value)) {
    label.classList.add("err-format");
  } else if (
    label.classList.contains("err-format") ||
    /\w+@\w+.\w+/.test(input.value)
  ) {
    label.classList.remove("err-format");
    singUp.style.display = "none";
    finish.style.display = "flex";
    showEmail.innerHTML = input.value;
    input.value = "";
  }
});
btnDismiss.addEventListener("click", function () {
  singUp.style.display = "flex";
  finish.style.display = "none";
});
