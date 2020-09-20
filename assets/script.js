// Assignment code here
// Make variables
// Create function to get random variable of each variable type
// Get User Information (say no to none)
//Create function to combine option
// Create function to pull out onr of each chosen
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

//Helpful  way to concat with more than 2 arrays
//var combineLowerUpperNum = [...lowerLetter,...upperLetter,...num]
//var combineLowerUpper = [...lowerLetter, ...upperLetter]
//var combineLowerUpperSym = [...lowerLetter,...upperLetter]




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
        lowerConfirm: lowerConfirm,
        upperConfirm: upperConfirm,
        numConfirm: numConfirm,
        symConfirm: symConfirm,
        passwordLength: passwordLength

    }

    return PasswordVariables;
}
//This makes random aply to the letters/characters rather than just math. 
//IE. array length * random number below 1 (to the whole number) tells us which character to pull based on the array element position in the array [index]
function random(arrFiller){
  var index = Math.floor(Math.random() * arrFiller.length);
  var randomized = arrFiller[index];
  return randomized;
}

var FisherYates = function(fill) {  
  var fill = fill
  var i = fill.length, k , temp;      // k is to generate random index and temp is to swap the values
  while(--i > 0){
     k = Math.floor(Math.random() * (i+1));
     temp = fill[k];
     fill[k] = fill[i];
     fill[i] = temp;
  }
return fill
}


//answering
var generatePassword = function (){

  var options = getOptions();
  
  var result=[];
  var possibleChar=[];
  var gutanteeChar=[];

  if(options.lowerConfirm){
    possibleChar=[...possibleChar,...lowerLetter];
    gutanteeChar.push(random(lowerLetter))
  }

  if(options.upperConfirm){
    possibleChar=[...possibleChar,...upperLetter];
    gutanteeChar.push(random(upperLetter))
  }

  if(options.numConfirm){
    possibleChar=[possibleChar,...num];
    gutanteeChar.push(random(num))
  }

  if(options.symConfirm){
    possibleChar=[possibleChar,...sym];
    gutanteeChar.push(random(sym))
  }
// This creates a password using the character types selected at the correct length.

  for (let i = 0; i < options.passwordLength; i++) {
    var possibleCharacters = random(possibleChar)
    //Bellow "pushes" the possible characters that have been replaced/filled content wise with random possibleChar into the result aray
    result.push(possibleCharacters);

  }

  console.log(gutanteeChar)
  console.log(result)
 //!!!! This causes the result array to beoverwritten by the garanteeChar aray at the beginning. This makes the first characters the garenteed character that were pulled earlier withe the 'push' comand.
  for (let i = 0; i < gutanteeChar.length; i++) {
      result[i] = gutanteeChar[i];

  }
//console.log(result)
// shuffle final code so first three are not at start
 // var shuffle = function(result) 
  //{ _.shuffle(result[i])}
  //shuffle()

result= FisherYates(result)
   


  //console.log(result);
  return result.join("")

  }
    

     
 
//given
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
