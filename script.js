
// assigning variables to html elements from index.html
let passwordEl = document.querySelector("#password");
let buttonEl = document.querySelector('#generate');
let copyEl = document.querySelector('#copy');


// prompting the user to choose parameters for password
let length = prompt('Choose a password length between 8 and 128 characters');
length = parseFloat(length);
if(length < '8' || length > '128') {
    alert('please choose a length between 8 and 128 characters');
    length = prompt('Choose a password length between 8 and 128 characters');
}

let special = confirm('Would you like special characters in the password?');
let lowercase = confirm('Would you like lowercase letters in the password?');
let uppercase = confirm('Would you like uppercase characters in the password?');
let numeric = confirm('Would you like numeric characters in the password?');

// create an array of booleans that correlates to prompts
let criteria = [special, lowercase, uppercase, numeric];

// if(criteria == [false, false, false, false]) {
//     alert('please select at least one password criteria');
// }

console.log(criteria);

// creating array of strings of potential password characters
let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numericChar = '0123456789';
let allCharacters = [specialChar, lowerChar, upperChar, numericChar];
let string = '';

// adds appropriate string of characters in response to user input
for(let i = 0; i < criteria.length; i++) {
    if(criteria[i] == true) {
        string = string + allCharacters[i];
    }
}

console.log(string);

// function that selects random characters from string
function selectChar(string) {
    let rand = Math.floor(Math.random()*string.length);
    return string.charAt(rand);
}

// function that generates string from random characters selected in selectChar() function
let password = '';
function generatePassword(length) {
    for(let i = 0; i < length; i++) {
        password = password + selectChar(string);
    }
}


// calls the function to generate password
generatePassword(length);

// sets font size of password
passwordEl.style.fontSize = '20px';

// adding event listeners to display password in text area
buttonEl.addEventListener('click', function() {
    passwordEl.textContent = password;
    passwordEl.style.color = 'teal';
})

// adds event listener that copies password to clipboard
copyEl.addEventListener('click', function() {
    const el = document.createElement('textarea');
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})