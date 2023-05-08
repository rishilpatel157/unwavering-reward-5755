




let registerlogin1 = document.getElementById("registerlogin1")
let regiterhide = document.getElementsByClassName("hideregister")[0]
let hidelogin = document.getElementById("hidelogin")
let buttonlogin = document.getElementById("loginbutton")


let loginform = document.getElementById("loginform")
let registerform = document.getElementById("registerform")


let emailregister = document.getElementById("emailregister")
let passwordenter = document.getElementById("passwordenter")
let passwordreenter = document.getElementById("passwordreenter")
let emaillogin = document.getElementById("emaillogin")
let passwordlogin = document.getElementById("passwordlogin")

hidelogin.style.opacity = "0"
loginform.style.opacity = "0"
loginform.style.zIndex ="0"
let loginbtn  = document.getElementById("classlogin")
registerlogin1.addEventListener("click",function(){
      
    regiterhide.style.opacity = ""
    registerform.style.opacity = ""
   hidelogin.style.opacity = "0"
   loginform.style.opacity = "0"
   loginform.style.zIndex ="0"
   registerform.style.zIndex ="12"
   registerlogin1.style.backgroundColor = "rgb(17,122,122)"
   loginbtn.style.backgroundColor = "rgb(255,255,255)"
   registerlogin1.style.color = "rgb(255,255,255)"
   loginbtn.style.color = "black"


    
    
})

loginbtn.addEventListener("click",function(){
      
    regiterhide.style.opacity = "0"
    registerform.style.opacity = "0"
    hidelogin.style.opacity = ""
    loginform.style.opacity = ""

    loginform.style.zIndex ="12"
    registerform.style.zIndex ="0"

    loginbtn.style.backgroundColor = "rgb(17,122,122)"
    registerlogin1.style.backgroundColor = "rgb(255,255,255)"
   loginbtn.style.color = "rgb(255,255,255)"
   registerlogin1.style.color = "black"
     
     
 })
 
 