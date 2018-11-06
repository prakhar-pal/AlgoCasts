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
	insertLast(record){
		let last = this.getLast();
		if(!last){
			this.head = new Node(record);
		}else{
			last.next = new Node(record);
		}
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
	getAt(index){
		let size = this.size();
		if(index>size-1)
			return null;
		let count = 0;
		let head = this.head;
		while(count<index){
			head = head.next;
			count++;
		}
		return head;

	}
	forEach(cb){
		let index = 0;
		let head = this.head;
		while(head){
			cb(head);
			head=head.next;
			index++;
		}
	}
}

module.exports = { Node, LinkedList };
