// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
	insert(record){
		if(record<this.data){
			!this.left ? (this.left = new Node(record)) : this.left.insert(record); 
		}else{
			!this.right ? (this.right = new Node(record)) : this.right.insert(record);	
		}
	}
	contains(record){
		if(this.data == record) return this;
		if(record<this.data) return (this.left && this.left.contains(record)) || null;
		else return (this.right && this.right.contains(record)) || null;
	}
}

module.exports = Node;
