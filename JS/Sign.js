var Box_1 = document.getElementById("BOX-1")
var Box_2= document.getElementById("BOX-2")
var SignIn= document.querySelector(".Login")
var Gmail = document.getElementById("Gmail")
var Login_headline = document.getElementById("Login_headline")
var Btn_1 = document.getElementById("Btn_1")
var Btn_2 = document.getElementById("Btn_2")
var Headline = document.querySelector(".Headline")
var Forget = document.getElementById("Forget")

function BOX_2() {

    ////////////////////
    Boxx_1.classList.remove("B1_left")
    Boxx_2.classList.remove("B2_right")

    Boxx_1.classList.add("B1_right")
    Boxx_2.classList.add("B2_left")
    /////////////
    Add.forEach((element) => {
        element.classList.remove('Contant_right');
      });
      Add_2.forEach((element) => {
          element.classList.remove('Contant_left');
        });

        Add.forEach((element)=>{
            element.classList.add("Contant_left")
        })
        Add_2.forEach((element)=>{
            element.classList.add("Contant_right")
        })
      
    /////////
    SignIn.innerHTML = "Sign In"
    
    /////////
    Gmail.style.display = "none"

    //////
    Login_headline.innerHTML = "Log In"
    Login_headline.classList.remove("Show")

    /////
    Btn_2.style.display = "none"
    Btn_1.style.display = "block"
    
    ////
    Headline.innerHTML = "Creat a Account"
    ////
    Forget.style.display = "block"
    ////

}