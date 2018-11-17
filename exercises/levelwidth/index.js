// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	if(!root) return [];
	let count=[],nodes=[],temp=[];
	nodes.push(root);
	while(nodes.length!=0){
		count.push(nodes.length);
		nodes.forEach(node=>{
			temp.push(...node.children);
		})
		nodes = temp;
		temp = [];
	}
	return count;
}

module.exports = levelWidth;
