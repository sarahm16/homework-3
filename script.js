
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

// creating arrays of potential password characters
let specialChar = ['!','#','$','%','&','(',')','*','-','/',':',';','<','=','>'];
let lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numericChar = ['0','1','2','3','4','5','6','7','8','9'];
let upperChar = [];

for(let i = 0; i < 26; i++) {
    upperChar[i] = lowerChar[i].toUpperCase();
}






// adding event listeners to generate password and copy to clipboard buttons
buttonEl.addEventListener('click', function() {
    passwordEl.textContent = password;
});

copyEl.addEventListener('click', function() {

});