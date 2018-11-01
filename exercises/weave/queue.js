// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
  	// console.log('adding '+record);
    this.data.unshift(record);
  }

  remove() {
  	let item = this.data.pop();
  	// console.log('removing '+item);
    return item;
  }
  peek(){
  	return this.data[this.data.length-1];
  }
  toString(){
  	return this.data;
  }
}

module.exports = Queue;
