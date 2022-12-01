const validate = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/; //regex for email validation
const button = document.querySelector("button");
const email = <HTMLInputElement>document.getElementById("email");
const error: HTMLElement = document.querySelector("#error");
const input = document.querySelector("input");

const validation = () => {
  if (email.value.match(validate)) {
    email.style.border = "1px solid green";
    error.style.opacity = "0";
  } else {
    email.style.border = "1px solid var(--secondary-color2)";
    error.style.opacity = "1";
  }
};

button.addEventListener("click", validation);
