// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let charMap = {};
	stringA = removeExtraChars(stringA);
	stringB = removeExtraChars(stringB);
	for(char of stringA){
		if(!charMap[char]){
			charMap[char] = 1;
		}else{
			charMap[char]++;
		}
	}
	for(char of stringB){
		if(!charMap[char]){
			return false;
		}else{
			charMap[char]--;
		}
	}
	for(key in charMap){
		if(charMap.hasOwnProperty(key) && charMap[key]!=0){
			return false;
		}
	}
	return true;
}
function removeExtraChars(str){
	return str.replace(/[^\w]/g,'').toLowerCase();
}

module.exports = anagrams;
