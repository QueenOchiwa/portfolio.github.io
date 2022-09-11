let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}


//dark mode
let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
    else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

/* ============ contact ================== */
const form = document.querySelector("form"),
statusTxt = document.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefault(); //prevents from submitting.
    statusTxt.style.color = "rgb(172, 73, 249)";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object.
    xhr.open("POST", "message.php", true); //sending post request to php file
    let formData = new FormData(form);
    formData.append('update', true);//creating new form data obj.
    xhr.send(formData);
    xhr.onload = funtcion() { //once ajax is loaded
        if(xhr.readyState == 4 && xhr.status == 200) { 
            // if ajax response is 200 & ready status is 4 means there is no error.
            let response = xhr.response;//storing ajax response in response var.
            if(response.indexOf("Email and Message field is required!") != -1 || response.indexOf("Please Enter a Valid Email!") || response.indexOf("Sorry, failed to send your message!")) {
                statusTxt.style.color = "red";   
            } else {
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000);
            }
            
            statusTxt.innerText = response;
        }
    }
}
