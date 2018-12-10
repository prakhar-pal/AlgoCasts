// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<arr.length;j++){
			if(arr[j]>arr[j+1]){
				let temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp; 
			}
		}
	}
	return arr;
}

function selectionSort(arr) {
	for(let i=0;i<arr.length;i++){
		let min = null,minIndex;
		for(let j=i;j<arr.length;j++){
			if(min==null) {
				min = arr[j];
				minIndex = j;
				continue;
			}
			if(arr[j] < min){
				minIndex = j;
				min = arr[j];
			}
		}
		swap(arr,i,minIndex);
	}
	return arr;
}
let swap  = (array,i,j)=>{
	if(Math.abs(i-j)<1 || i<0 || j<0) return array;
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
function createArray(arr,i,j){
	print(`createArray() i=${i}, j=${j}, array=${arr}`);
	let out = [];
	for(let index=i;index<=j;index++) out.push(arr[index]);
	print(`created ${out}`);
	return out;
}
function mergeSort(arr,i=0,j=arr.length-1) {
	console.log(`current i is ${i} and j is ${j}`);
 	if(i==j || (i+1)==j){
 		if(arr[i]>arr[j]) swap(arr,i,j);
 		print(`base case return ${arr}`);
 		return arr;
 	}else{
 		print(`i-j is more than 1`);
 		let mid = Math.floor((i+j)/2);
 		let left = createArray(arr,i,mid);
 		print(`left array is ${left}`);
 		left  = mergeSort(left,0,left.length-1>0? left.length-1 : 0);
 		let right = createArray(arr,mid+1,j);
 		print(`right array is ${right}`);
 		right = mergeSort(right,0,right.length-1>0? right.length-1 : 0);
 		let out = merge(left,right);
 		print(`merged ${left} and ${right} to get ${out}`);
 		return out;
 	}
}
function print(data){
	console.log(data);
}
function merge(left, right) {
	print(`left is ${left} and right is ${right}`);
	let out = [],indexLeft=0,indexRight=0;
	while(indexLeft<left.length || indexRight<right.length){
		// print(`inside while loop`);
		let valueLeft;
		if(indexLeft<left.length){
			valueLeft = left[indexLeft];
		}
		let valueRight;
		if(indexRight<right.length){
			valueRight = right[indexRight];
		}
		print(`comparing ${valueLeft} and ${valueRight}`);
		/* 1 && 0 is 0, so we can't do valueLeft && valueRight to check that both numbers exist */
		if(!isNaN(valueRight) && !isNaN(valueLeft)){
			if(valueLeft<valueRight){
				print(`inserting ${valueLeft}`);
				out.push(valueLeft);
				indexLeft++;
			}else{
				print(`inserting ${valueRight}`);
				out.push(valueRight);
				indexRight++;
			}
		}else if(valueRight){
			 print(`inserting ${valueRight}`);
			out.push(valueRight);
			indexRight++;
		}else{
			print(`inserting ${valueLeft}`);
			out.push(valueLeft);
			indexLeft++;
		}
	}
	return out;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
