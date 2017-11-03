var inquirer = require('inquirer');

/*
 // constructor function used to create programmers objects
 function Programmer(name, position, age, language) {
 this.name = name;
 this.position = position;
 this.age = age;
 this.language = language;
 }

 // creates the printInfo method and applies it to all programmer objects
 Programmer.prototype.printInfo = function() {
 console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
 this.age + "\nLanguages: " + this.language);
 };
*/

/*Used to create an object representing the current word the user
is attempting to guess. This should contain word specific logic and data.*/
function Word(word){
    this.word = word;

}

Word.prototype.printInfo = function() {
    console.log("Letter: " , this.word);
};


/*Used for each letter in the current word. Each letter object should either display an underlying character, or
a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This
should contain letter specific logic and data.*/
function Letter(){

}
runInquire();

function runInquire(){
    inquirer.prompt([{
            name: "letter",
            message: "Guess a letter the word."
        }]
    ).then(function (answers) {
        var inputOfUser = new Word(answers.letter);
        inputOfUser.printInfo();
        //console.log(answers.word);
    });

    //If all letters are guessed then stop the program.
    //If all letters are NOT guessed then call again.
    //runInquire();//keeps repeating the question.

}



/*You must keep track of the user's remaining guesses and prompt the user if they would
like to end the game if none remain. Each constructor function should be in it's own file and be exported and
required wherever needed. Look into function prototypes and use them for a few of your constructor's methods.*/







