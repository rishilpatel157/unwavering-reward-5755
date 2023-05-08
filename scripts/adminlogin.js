
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    let admin = JSON.parse(localStorage.getItem("admin"))|| null

    let form = document.querySelector("form")
  
     form.addEventListener("submit",function(e){
      e.preventDefault()
      if (username.value === "rishil" && password.value === "password") {
     
         admin = true
         localStorage.setItem("admin",JSON.stringify(admin))
         alert("Login successful!");
         
        } else {
          alert("Invalid username or password!");
        }
      })
   let adminnav = document.getElementById("adminname")
      if(admin)
      {
        adminnav.innerText = "Admin"
      }
      else
      {
        adminnav.innerText = "Login As Admin"
      }
  


  
 
 