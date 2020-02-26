export class DoublyLinkedList<T> {
  head: Node<T>;
  tail: Node<T>;
  length: number;

  constructor(data: T = null) {
    if (data) {
      const headNode = new Node(data);
      this.head = headNode;
      this.tail = headNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }
  /**
   * return true if the length of the linkedList is 0
   */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Adding node to the end of the LinkedList
   * @param node
   */
  private addNode(data: T) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * add the node in the beginning of the LinkedList
   * @param data
   */
  addFirst(data: T) {
    if (this.isEmpty()) {
      this.head = this.tail = new Node(data);
    } else {
      let node = new Node(data);
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * add the node in the last of the linkedList
   * @param data
   */
  addLast(data: T) {
    this.addNode(data);
  }

  /**
   * add a node at provided index with data
   * @param data
   * @param index
   */
  addAt(data: T, index: number) {
    if (index < 0 || index > this.length) throw "Illegal argument";
    if (index === 0) this.addFirst(data);
    else if (index === this.length) this.addNode(data);
    else {
      if (index < this.length / 2) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
          currentNode = currentNode.next;
        }
        this.newNodeAssignment(currentNode, data);
      } else {
        let currentNode = this.tail;
        for (let i = this.length - 1; i > index; i--) {  
          currentNode = currentNode.previous;
        }
        this.newNodeAssignment(currentNode, data);
      }
    }
  }

  private newNodeAssignment(currentNode: Node<T>, data: T) : Node<T>{
    let newNode = new Node(data);

    currentNode.previous.next = newNode;
    newNode.previous = currentNode.previous;
    newNode.next = currentNode;
    currentNode.previous = newNode;
    this.length++;
    return newNode.next;
  }

  /**
   * add the list of element to the linked list after the provided node
   * @param startNode is the staring node from which the list will be get added
   * @param l list of element
   */
  private addFrom(startNode: Node<T>, l: Array<T>): Node<T>{
    if(!l) throw new Error('NullPointerException');
    if(!startNode){
      for(let content of l){
        this.addNode(content);
      }
    }else{
      for(let content of l){
        startNode = this.newNodeAssignment(startNode, content);
      }
    }
    return startNode;
  }

  /**
   * add all the element to the end of the linked list
   * @param l list of element
   */
  addAll(l: Array<T>): boolean{
    if(!l) throw new Error('NullPointerException');
    for(let content of l){
      this.addNode(content);
    }
    return true;
  }

  /**
   * add the list of element to the linked list from the provided index
   * @param index starting index for insertion
   * @param l list of element
   */
  addAllFrom(index: number, l: Array<T>): boolean{
    if(!l) throw new Error('NullPointerException')
    if (index < 0 || index > this.length) throw new Error("Illegal argument");
    let currentNode = this.head;
    
    if(index === 0){
      this.addFirst(l[index]);
      l.splice(0,1);
      currentNode = this.head.next;
    }else if(index === this.length){
      return this.addAll(l);
    }
    
    for(let i = 0; i < index; i++){
      currentNode = currentNode.next;
    }
    console.log(`current node data is ${currentNode.data}`);
    this.addFrom(currentNode, l);
    return true;
  }

  /**
   * return the value of first node if it exists.
   */
  peekFirst(): T {
    if (this.isEmpty()) throw "The LinkedList is empty.";
    return this.head.data;
  }

  /**
   * return the value of last node if it exists.
   */
  peekLast(): T {
    if (this.isEmpty()) throw "The LinkedList is empty.";
    return this.tail.data;
  }

  /**
   * delete the first node of the linked list
   */
  deleteFirst(): T {
    if (this.isEmpty()) throw "The LinkedList is empty";

    let data: T = this.head.data;
    this.head = this.head.next;
    this.length--;

    if (this.isEmpty()) this.tail = null;
    else this.head.previous = null;

    return data;
  }

  /**
   * delete the last node of the linked list
   */
  deleteLast(): T {
    if (this.isEmpty()) throw "The LinkedList is empty";

    let data: T = this.head.data;
    this.tail = this.tail.previous;
    this.length--;

    if (this.isEmpty()) this.head = null;
    else this.tail.next = null;

    return data;
  }

  /**
   * delete the node at provided index
   * @param index
   */
  deleteAt(index: number): T {
    if (index < 0 || index >= this.length) throw "Illegal argument";
    if (index === 0) return this.deleteFirst();
    else if (index === this.length - 1) return this.deleteLast();
    else {
      if (index < this.length / 2) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
          currentNode = currentNode.next;
        }
        return this.removeNode(currentNode);
      } else {
        let currentNode = this.tail;
        for (let i = this.length - 1; i > index; i--) {
          currentNode = currentNode.previous;
        }
        return this.removeNode(currentNode);
      }
    }
  }
  
  private removeNode(node: Node<T>): T {
    const data = node.data;
    node.previous.next = node.next;
    node.next.previous = node.previous;
    this.length--;

    node.data = null;
    node.next = node.previous = null;

    return data;
  }

  /**
   * delete the node in the linked list
   * @param node
   */
  deleteNode(node: Node<T>){
    if(!node.previous) this.deleteFirst();
    else if(!node.next) this.deleteLast();
    else{
      this.removeNode(node);
    }
  }
  /**
   * delete the first node contains with data
   * @param data
   */
  deleteWith(data: T){
    let node = this.head;
    while(node){
      if(node.data === data){
        this.deleteNode(node);
        return;
      }
      node = node.next;
    }
  }

   /**
   * check the data present in the linkedList or not
   * @param data 
   */
  contains(data: T): boolean{
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === data) return true;
      currentNode = currentNode.next
    }
    return false;
  }

  /**
   * clear the linked list
   */
  clear(): boolean{
    let node: Node<T> = this.head;
    while(node){
      let next: Node<T> = node.next;
      node.data = null;
      node.next = null;
      node.previous = null;
      node = next;
    }
    //this.head = this.tail = null;
    this.length = 0;
    return true;
  }



  /**
   * Generator to iterate over the linkedList
   */
  *items() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  /**
   * print the data of the LinkedList
   */
  print(){
    let dataArray: Array<T> = [];
    for(let node of this){
      dataArray.push(node.data);
    }
    console.log(dataArray);
  }

  [Symbol.iterator]() {
    let node = this.head;
    return {
      next: () => {
        if (node) {
          let data = node;
          node = node.next;
          return { value: data, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

class Node<T> {
  data: T;
  next: Node<T>;
  previous: Node<T>;

  constructor(data: T) {
    this.data = data;
    this.next = this.previous = null;
  }
}
