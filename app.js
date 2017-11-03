var inquirer = require('inquirer');
var inputOfUser="";
var letterArray = [];
var wordBank = ["dog", "cat", "frog", "lion","bear"];
var wordToGuess;
var word = require('./word.js');
var word = require('./letter.js');


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
        inputOfUser = new Word(answers.letter);
        inputOfUser.printInfo();

        //Push the letter into the array
        letterArray.push(answers.letter);
        console.log("The letter is: " , letterArray);
    });

    //If all letters are guessed then stop the program.
    //If all letters are NOT guessed then call again.
    //runInquire();//keeps repeating the question.

    //Put letter in an array
    //Check the letter
    //checkEachLetter();
}

function checkEachLetter()
{
    for(var i =0; i< wordToGuess.length; i++)
    {
        wordToGuess.charAt(i);
        console.log(wordToGuess.charAt(i));
    }
}


/*function generateWord()
{
    var calculateWordPosition = Math.floor(Math.random() * wordBank.length);
    currentWordToGuess = wordBank[calculateWordPosition];
    console.log(currentWordToGuess);
}*/

/*You must keep track of the user's remaining guesses and prompt the user if they would
like to end the game if none remain. Each constructor function should be in it's own file and be exported and
required wherever needed. Look into function prototypes and use them for a few of your constructor's methods.*/







