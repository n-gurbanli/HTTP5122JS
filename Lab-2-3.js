//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var joinList;
var messageOut = "Thank you, ";
var yesMessage = "our next newsletter will be sent to ";
var noMessage = "we will not bother you again.";
var errorMessage = "but your email was not valid.";

var joinList = window.confirm("Would you like to join our mailing list?");
console.log(joinList);

if (joinList === true) {
    var defaultEmail = "me@example.com";
    var userInput = window.prompt("Provide your email address, please", defaultEmail);

    if (userInput === null) {
        window.alert(messageOut + noMessage);
    } else if (userInput === "" || userInput === defaultEmail) {
        window.alert(messageOut + errorMessage)
    } else {
        window.alert(messageOut + yesMessage + userInput);
    }
}
//==== LOGIC =============