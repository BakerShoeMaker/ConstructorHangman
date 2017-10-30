var inquirer = require('inquirer');

inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
    // Use user feedback for... whatever!!
});

//Used to create an object representing the current word the user
// is attempting to guess. This should contain word specific logic and data.
function Word(){
    
    
}
//Used for each letter in the current word. Each letter object should either display an underlying character, or
// a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This
// should contain letter specific logic and data.
function Letter() {
    
}

//You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
//Each constructor function should be in it's own file and be exported and required wherever needed.
//Look into function prototypes and use them for a few of your constructor's methods.


