//Business Logic
/* es-lint disable no-unused-vars */
export function NewEntry(title, inputtedString){
  this.sentenceCounter = 0;
  this.numOfVowels = 0;
  this.numOfConsonants = 0;
  this.inputtedString = inputtedString;
  this.title = [];
  this.entry = [];

}

//Prototype method counts number of words in an entry
NewEntry.prototype.countWords = function(){
  this.entry = this.inputtedString.split(" ");
  this.sentenceCounter = this.entry.length;
 // console.log(this.sentenceCounter);
}

//Prototype method counts number of vowels/consonants in an entry
NewEntry.prototype.phonetics = function(){
  for (let i = 0; i < this.inputtedString.length; i++){
    if (/[aeoiu]/gi.test(this.inputtedString[i])) {
      this.numOfVowels += 1;
      console.log(this.numOfVowels);
    }

  }
}

//Prototype method displays first 8 words in an entry
NewEntry.prototype.getTeaser = function(){ 
// If greater than 8 words, do nothing
//for loop looops over entry
}

// Test area
let entry1 = new NewEntry("this title", "theee sky");
entry1.countWords();
entry1.phonetics();

/* es-lint disable */