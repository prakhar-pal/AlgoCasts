// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	let stepCount = 1;
	let out = [];
	/*create two dimensional arrays*/
	for (var i = n - 1; i >= 0; i--) {
		out.push(new Array());
	}
	//console.error('out is 2dim:'+out.length);
	for(let i=0;i<n;i++){
		for(let j=0;j<n;j++){
			if(j<stepCount)
				out[i].push('#');
			else
				out[i].push(' ');
		}
		stepCount++;
	}
	//console.error(`out for ${n} is ${out}`);
	debugger;
	for(let i=0;i<out.length;i++){
		console.log(out[i].toString().replace(/,/g,''));
		// for(let j=0;j<out[i].length;j++){
		// 	process.stdout.write(out[i][j]);
		// }
		// process.stdout.write('\n');

	}
	return out;
}
steps(10);

module.exports = steps;
