// Assignment code here
// Make variables
// Create function to get random variable of each variable type
// Get User Information (say no to none)
// Create function to pull out one of each chosen
// Create function to combine options
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

var sym = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ')', '_', '-', '+', '=', 
'{', '}', '[', ']', '|', ';', ':', '"', "'", ':', ';', '<', '>', ',', '.', '/', '?' 
]

var num = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
]



//asking for what kind of password the user wants
function getOptions(){
  var passwordLength = parseInt(
    window.prompt("How many characters for your password? (Password MUST be between 8 and 128 characters")
    )
        if (isNaN(passwordLength) === true){ 
          alert("That is not a number. Please try again.")
            return;
        }
        if (passwordLength <8 || passwordLength >128){
        
          alert("That is not a number between 8 and 128. Please try again.") 
            return;
        } 
        else {
          alert("Now pick your character types.")
        }

    //lowercase
    var lowerConfirm = window.confirm("Click OK to include lowercase letters.");
        console.log ("lower letters " + lowerConfirm); 


    //uppercase
    var upperConfirm = window.confirm("Click OK to include uppercase letters.");
      console.log ("upper letters " + upperConfirm); 


    //number
    var numConfirm = window.confirm("Click OK to include numbers.");
        console.log ("number confirm " + numConfirm); 

    //special character
    var symConfirm = window.confirm("Click OK to include symbols.");
        console.log ("symbol confirm  " + symConfirm); 


    // main object ^.^
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
        lowerConfirm: lowerConfirm,
        upperConfirm: upperConfirm,
        numConfirm: numConfirm,
        symConfirm: symConfirm,
        passwordLength: passwordLength

    }

    return PasswordVariables;
}

//randomizer
function random(arrFiller){
  var index = Math.floor(Math.random() * arrFiller.length);
  var randomized = arrFiller[index];
  return randomized;
}


//cool code for shuffling - has neet history! 
// check out the history from https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
var FisherYates = function(fill) {  
  var fill = fill // important! remenber to keep track of fill consistency!
  var i = fill.length, k , temp;      
  while(--i > 0){
     k = Math.floor(Math.random() * (i+1));
     temp = fill[k]; //swaps out variables as run them through randomizer in k
     fill[k] = fill[i];
     fill[i] = temp;
  }
return fill
}

//answering
var generatePassword = function (){

  var options = getOptions();
  
  var result=[]; //final password before final shuffling
  var possibleChar=[]; // all posible characters selected
  var garenteedChar=[]; //where garenteed characters go

  if(options.lowerConfirm){
    possibleChar=[...possibleChar,...lowerLetter];
    garenteedChar.push(random(lowerLetter)) //sets aside one character
  }

  if(options.upperConfirm){
    possibleChar=[...possibleChar,...upperLetter];
    garenteedChar.push(random(upperLetter)) //sets aside one character
  }

  if(options.numConfirm){
    possibleChar=[...possibleChar,...num];
    garenteedChar.push(random(num)) //sets aside one character
  }

  if(options.symConfirm){
    possibleChar=[...possibleChar,...sym];
    garenteedChar.push(random(sym)) //sets aside one character
  }
  // This creates a password using the character types selected at the correct length.
  for (let i = 0; i < options.passwordLength; i++) {
    var possibleCharacters = random(possibleChar)
    //Bellow "pushes" the now randomized possibleChar or the right length into the result
    result.push(possibleCharacters);

  }

  console.log(garenteedChar)
  console.log(result)
 //!!!! This causes the result array to be overwritten by the garanteeChar aray at the beginning. This makes the first characters the garenteed character that were pulled earlier withe the 'push' comand.
  for (let i = 0; i < garenteedChar.length; i++) {
      result[i] = garenteedChar[i];
  }

result= FisherYates(result) //[i] not needed
   

  //console.log(result);
  return result.join("")
}
    

//given code
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
