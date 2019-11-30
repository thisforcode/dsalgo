class Node{
 	constructor(data, next=null){
		this.data = data;
		this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
	}
	addAtHead(data){
		let newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
		return this.head;
	}
	addAtTail(data){
		let newNode = new Node(data);
		if(!this.head){
			this.head = newNode;
			return this.head;
		}
		let tail = this.head;
		if(tail.next !== null){
			tail = tail.next;
		}
		tail.next = newNode;	

		return this.head;
	}
}
var list = new LinkedList();
list.addAtHead(5);
console.log(list.addAtTail(4));