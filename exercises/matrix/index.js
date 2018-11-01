// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
let directions = {'left':'left','right':'right','top':'top','bottom':'bottom'};
function getNextInfo(dir,boundaries,pos){
	let info={};
	switch(dir){
		case directions.left:
			if(boundaries.left==pos[1]){
				/*change of directions*/
				info.dir=directions.top;
				info.pos=[pos[0]-1,pos[1]];
				info.boundaries={...boundaries,left:boundaries.left+1};
			}else{
				info.dir=dir;
				info.pos=[pos[0],pos[1]-1];
				info.boundaries = boundaries;
			}
			break;

		case directions.right:
			if(boundaries.right==pos[1]){
				/*change of directions*/
				info.dir=directions.bottom;
				info.pos=[pos[0]+1,pos[1]];
				info.boundaries={...boundaries,right:boundaries.right-1};
			}else{
				info.dir=dir;
				info.pos=[pos[0],pos[1]+1];
				info.boundaries = boundaries;
			}
			break;	

		case directions.top:
			if(boundaries.top==pos[0]){
				/*change of directions*/
				info.dir=directions.right;
				info.pos=[pos[0],pos[1]+1];
				info.boundaries={...boundaries,top:boundaries.top+1};
			}else{
				info.dir=dir;
				info.pos=[pos[0]-1,pos[1]];
				info.boundaries = boundaries;
			}
			break;

		case directions.bottom:
			if(boundaries.bottom==pos[0]){
				/*change of directions*/
				info.dir=directions.left;
				info.pos=[pos[0],pos[1]-1];
				info.boundaries={...boundaries,bottom:boundaries.bottom-1};
			}else{
				info.dir=dir;
				info.pos=[pos[0]+1,pos[1]];
				info.boundaries = boundaries;
			}

			break;
	}
	return info;
}
function createTwoDimensionalArray(m,n){
	if(!n)	n=m;
	let out = new Array(m);
	let temp = 0;
	while(temp<m){
		out[temp] = new Array(n);
		temp++;
	}
	return out;
}
function matrix(n, mat=null,currentNum=1,dir=directions.right,boundaries={},pos=[0,0]) {
	if(!mat){
		mat = createTwoDimensionalArray(n);
		boundaries = {
			'left': 0,
			'top': 1,
			'right': n-1,
			'bottom': n-1
		}
	}
	mat[pos[0]][pos[1]] = currentNum;
	if(n*n==currentNum)
		return;
	let info = getNextInfo(dir,boundaries,pos);
	//console.log(`info is ${JSON.stringify(info,null,2)} for pos ${pos}`);
	matrix(n,mat,currentNum+1,dir=info.dir,boundaries=info.boundaries,pos=info.pos);
	return mat;
}
module.exports = matrix;
