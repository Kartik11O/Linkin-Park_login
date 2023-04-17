var Boxx_1 = document.getElementById("BOX-1")
var Boxx_2 = document.getElementById("BOX-2")
var SignIn = document.querySelector(".Login")
var Gmail = document.getElementById("Gmail")
var Login_headline = document.getElementById("Login_headline")
var Btn_1 = document.getElementById("Btn_1")
var Btn_2 = document.getElementById("Btn_2")
var Headline = document.querySelector(".Headline")
var Forget = document.getElementById("Forget")
var Add = document.querySelectorAll(".Add")
var Add_2 = document.querySelectorAll(".Add_2")
var Join = document.querySelector(".Join")


function BOX_1() {
    ////////////////////
    Boxx_1.classList.remove("B1_right")
    Boxx_2.classList.remove("B2_left")

    Boxx_1.classList.add("B1_left")
    Boxx_2.classList.add("B2_right")
    ////////
    Add.forEach((element) => {
        element.classList.add('Contant_right');
    });

    Add_2.forEach((element) => {
        element.classList.add('Contant_left');
    });

    Add.forEach((element) => {
        element.classList.remove("Contant_left")
    })
    Add_2.forEach((element) => {
        element.classList.remove("Contant_right")
    })
    ///////////
    SignIn.innerHTML = "Sign In"
    
    /////////
    Gmail.style.display = "block"

    //////
    Login_headline.innerHTML = "Sign In"

    /////
    Btn_2.style.display = "block"
    Btn_1.style.display = "none"

    /////
    Forget.style.display = "none"
    ////
    Headline.innerHTML = "Already have a account?"

    /////
}


