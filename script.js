function validateRegisterForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
  
    if (username === '') {
      alert('Username is required');
      return false;
    }
  
    if (!validateEmail(email)) {
      alert('Invalid email address');
      return false;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
  
    alert('Registration successful!');
    return true; 
  }
  
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }



  // Sign in 


  function validateSignInForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false; 
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false; 
    }
  
    
    alert("Login successful!");
    return true; 
  }
  


  

  
  