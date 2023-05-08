




let registerlogin1 = document.getElementById("registerlogin1")
let regiterhide = document.getElementsByClassName("hideregister")[0]
let hidelogin = document.getElementById("hidelogin")
let buttonlogin = document.getElementById("loginbutton")

let userName = document.getElementById("name")
let navuser = document.getElementById("navuser")
console.log(navuser.innerText,userName.value)



let loginform = document.getElementById("loginform")
let registerform = document.getElementById("registerform")


let emailregister = document.getElementById("emailregister")
let passwordenter = document.getElementById("passwordenter")
let passwordreenter = document.getElementById("passwordreenter")
let emaillogin = document.getElementById("emaillogin")
let passwordlogin = document.getElementById("passwordlogin")

let registerbtn = document.getElementById("registerbtn")



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


 
 
 let register = JSON.parse(localStorage.getItem("register"))||[]
 registerbtn.addEventListener("click",function(){

        if(passwordenter.value!==passwordreenter.value)
        {
                alert("password are not matching")

        }
        else
        {
          obj={}
          obj.username = emailregister.value
          obj.password = passwordenter.value

          register.push(obj)
          localStorage.setItem("register",JSON.stringify(register))
          alert("Registered Successfully")
        }

 })

let user = JSON.parse(localStorage.getItem("user"))||{}
 buttonlogin.addEventListener("click",function(e){
   e.preventDefault()
      flag = false
       register.forEach(element => {
               if(emaillogin.value!=element.username)
               {
                
                flag = false
                
                return

              }
              else if(passwordlogin.value!=element.password)
              {
                flag = false
                 return
              }
              else if(emaillogin.value==element.username && passwordlogin.value==element.password)
              {
                flag = true      
              }

            });
            
            if(flag)
       {
        user.username = userName.value
        user.login = true

         navuser.innerText = userName.value
         
         localStorage.setItem("user",user)
         alert("Logged in Succesfully")
         
        }
        else
       {
         alert("Username & Password is not matching")
       }
       
      })
      
      if(user.login)
      {
        navuser.innerText = user.username
        
      }
      else
      {
        navuser.innerText = "User"

      }
