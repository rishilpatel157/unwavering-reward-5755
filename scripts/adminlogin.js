
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    let admin = JSON.parse(localStorage.getItem("admin"))|| null

    let form = document.querySelector("form")
  
     form.addEventListener("submit",function(e){
      e.preventDefault()
      if (username.value === "rishil" && password.value === "password") {
     
         localStorage.setItem("admin",JSON.stringify(admin))
         alert("Login successful!");
         window.location.href = './admin.html'
         
        } else {
          alert("Invalid username or password!");
        }
      })
 
  


  
 
 console.log(admin)