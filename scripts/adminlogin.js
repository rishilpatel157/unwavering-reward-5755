function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Show the overlay and loader
    document.querySelector(".overlay").style.display = "flex";
  
    // Simulate a delay to simulate a login process
    setTimeout(function() {
      // Check if the username and password are correct
      if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to the admin dashboard or do whatever else is needed for the admin interface
      } else {
        alert("Invalid username or password!");
      }
      // Hide the overlay and loader
      document.querySelector(".overlay").style.display = "none";
    }, 3000);
  }
  
 
 