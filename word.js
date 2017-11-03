function Word(word){
    this.word = word;

}
Word.prototype.printInfo = function() {
    console.log("Letter: " , this.word);
};