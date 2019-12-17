
// assigning variables to html elements from index.html
let passwordEl = document.querySelector("#password");
let buttonEl = document.querySelector('#generate');
let copyEl = document.querySelector('#copy');


// prompting the user to choose parameters for password
let length = prompt('Choose a password length between 8 and 128 characters');
length = parseFloat(length);
if(length < '8' || length > '128') {
    alert('please choose a length between 8 and 128 characters');
}

let special = confirm('Would you like special characters in the password?');
let lowercase = confirm('Would you like lowercase letters in the password?');
let uppercase = confirm('Would you like uppercase characters in the password?');
let numeric = confirm('Would you like numeric characters in the password?');












// adding event listeners to generate password and copy to clipboard buttons
buttonEl.addEventListener('click', function() {
    passwordEl.textContent = password;
});

copyEl.addEventListener('click', function() {

});