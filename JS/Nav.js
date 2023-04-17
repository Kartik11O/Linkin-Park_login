var NavPhone = document.getElementById("NavPhone")

function Open_Close(){

 if(NavPhone.style.display == "none"){
    NavPhone.style.display = "block"
 }

 else{
    NavPhone.style.display = "none"
 }

}

window.addEventListener("load" , ()=>{
    NavPhone.style.display = "none"
})