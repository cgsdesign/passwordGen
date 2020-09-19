// Assignment code here
// Make variables
// Create function to get random variable of each variable type
// Get User Information (say no to none)
// Create function to determin number of each variable type per user info
// Create function to make correct number of each
// Create function to merge variable types back together
// Cerate function to shuffle made variables
// Create print to #password

var upperLetter = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' 
]

var lowerLetter = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

var Sym = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ')', '_', '-', '+', '=', 
'{', '}', '[', ']', '\\', '|', ';', ':', '"', "'", ':', ';', '<', '>', ',', '.', '/', '?' 
]

var Num = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
]

//answering
var generatePassword = function (){

  var passwordLength = parseInt(
    window.prompt("How many characters for your password? (Password MUST be between 8 and 128 characters")
    )
        if (isNaN(passwordLength) === true){ 
          alert("That is not a number. Please try again.")
            return
        }
        if (passwordLength <8 || passwordLength >128){
        
          alert("That is not a number between 8 and 128. Please try again.") 
            return
        } 
        else {
          alert("Now pick your character types.")
        }

//______________________________WHY DOES THE RETURN ONLY WORK IF THE PASSWORDLENGTH IS FIRST?
    //lowercase
    var lowerConfirm = window.confirm("Click OK to include lowercase letters.");
        console.log ("lower letters " + lowerConfirm);

      //  if (symConfirm === true) {
      //    console.log ("include symbols " + symConfirm);
      //  }

    //uppercase
    var upperConfirm = window.confirm("Click OK to include uppercase letters.");
      console.log ("upper letters " + upperConfirm);

      //if (symConfirm === true) {
      //  console.log ("include symbols " + symConfirm);
      //}


    //number
    var numConfirm = window.confirm("Click OK to include numbers.");
        console.log ("number confirm " + numConfirm);

        //if (symConfirm === true) {
        //  console.log ("include symbols " + symConfirm);
        //}

    //special character
    var symConfirm = window.confirm("Click OK to include symbols.");
        console.log ("symbol confirm  " + symConfirm);

        //if (symConfirm === true) {
        //  console.log ("include symbols " + symConfirm);
        //}

    if (
        lowerConfirm === false &&
        upperConfirm === false &&
        numConfirm === false &&
        symConfirm === false
    ) {
      alert("No character are selected, please resubmit.")
      console.log ("nothing selected, resubmitting")
    }
      console.log("variables acounted for")

      var PasswordVariables = {
        lowerConfirm: (lowerConfirm),
        upperConfirm: (upperConfirm),
        numConfirm: (numConfirm),
        symConfirm: (symConfirm),
        passwordLength: (passwordLength)

    }
    console.log((PasswordVariables))
  }
    

     
 

      

















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
