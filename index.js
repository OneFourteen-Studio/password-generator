const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtn = document.querySelector('#generate-btn')
const passwordOne = document.querySelector('#password1')
const passwordTwo = document.querySelector('#password2')
password1 = ""
password2 = ""

function clear() {
    passwordOne.textContent = ""
    passwordTwo.textCOntent = ""
    password1 = ""
    password2 = ""
}

function getRandomCharacter() {
   return randomCharacter = characters[Math.floor(Math.random() * characters.length)]
}

function  generatePassword () {
    clear()
    
    for (let i = 0; i < 15; i++) {
        password1 += getRandomCharacter()
        password2 += getRandomCharacter()
    }

    passwordOne.textContent = password1
    passwordTwo.textContent = password2
}





// 1. make the function return a 15 characters from index 0 to the characters.length
// 2. loop through characters array 15 times and add each return to empty string
// 3. add empty dtring to password feilds as text content

// when you click the generate password button two different
// password pop up in the text fields

// to get random characters
// use the Math.random and Math.floor function 

// only allow 15 characters in each field



