// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n,) {
	let final = Array.apply(null,Array(2*n-1)).map(String.prototype.valueOf,'#').join('');
	pyramidHelper(final,n);
	// let mid = Math.ceil(n/2);
	// for(let i=0;i<n;i++){
	// 	let start = mid-i,
	// 		end  = mid+1;
	// 	let out = '';
	// 	for(let j=1;j<=2*n-1;j++){
	// 		if(j>=start && j<=end){
	// 			out = putValue(out,'#');
	// 		}else{
	// 			out = putValue(out,' ');
	// 		}
	// 	}
	// 	console.error('out is'+out);
	// 	console.log(out);
	// }
}
function reduce(str,step){
	let space = ' ';
	let totalSteps = Math.ceil(str.length/2);
	let left = totalSteps-step;
	let right = str.length-left-1;
	//console.log(`left is ${left} and right is ${right}`);
	return str.substring(0,left)+space+str.substring(left+1,right)+space+str.substring(right+1);
}
function pyramidHelper(currentString, currentStep){
	let length = currentString.length;
	if(currentStep==1){
		console.log(currentString);
	}else{
		let remainingString = reduce(currentString,currentStep);
		pyramidHelper(remainingString,currentStep-1);
		console.log(currentString);
	}
}
console.log('$'+reduce('#####',3)+'$');

module.exports = pyramid;
