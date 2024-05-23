//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============

var username = "dart";
var password = "vader";

var usernameInput = prompt("What is your username?");
console.log("Username entered:", usernameInput);

var passwordInput = prompt("What is your password?");
console.log("Password entered:", passwordInput);

if (usernameInput === username && passwordInput === password) {
       alert("Welcome back, " + usernameInput);
    console.log("Login successful");
} else {
    alert("Invalid username/password");
    console.log("Login Fail");
}
	

