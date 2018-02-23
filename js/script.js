// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
 
  $("#submit").click(function(){
  	var usersays = $("#input").val();
  	var pig = "";
  	console.log(usersays);
  	    var wordArray = usersays.split(" ");
  	    console.log(wordArray);
  	       for(var i=0;i<wordArray.length;i++){
  	           var word = wordArray[i];
  	           console.log(word);
  	             var prefix = word.slice(0,1);
  	             console.log(prefix);
  	                 var suffix = word.slice(1, word.length);
  	                 console.log(suffix);
  	                     pig = (suffix + prefix + "ay");
  	                    console.log(pig);
  	       }
  	 $("#result").append(pig);
  	 });



});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


