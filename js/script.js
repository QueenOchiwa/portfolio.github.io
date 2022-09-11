let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

//dark mode
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

//contact form submit
const form = document.querySelector("form"),
  statusTxt = document.querySelector(".button-area span");

async function handleSubmit(event) {
  event.preventDefault();
  statusTxt.style.color = "rgb(172, 73, 249)";
  statusTxt.style.display = "block";
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        statusTxt.innerText = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            statusTxt.innerText = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            statusTxt.innerText =
              "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      statusTxt.innerText = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
