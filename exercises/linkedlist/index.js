// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data,next=null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
	}
	insertFirst(record){
		this.head = new Node(record,this.head);
	}
	size(){
		let head = this.head,count=0;
		while(!(!head)) {count++;head = head.next;}
		return count;
	}
	getFirst(){
		return this.head;
	}
	getLast(){
		if(this.head==null) return null;
		let last = this.head;
		while(last.next!=null){
			last = last.next;
		}
		return last;
	}
	clear(){
		this.head=null;
	}
}

module.exports = { Node, LinkedList };
