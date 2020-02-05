"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Subrat Kumar Mishra
 */
class LinkedList {
    /**
     * create a new node and assign it to head if data is not null
     * @param data
     */
    constructor(data = null) {
        if (data) {
            const headNode = new Node(data);
            this.head = headNode;
            this.tail = headNode;
            this.length = 1;
        }
        else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }
    /**
     * return true if the length of the linkedList is 0
     */
    isEmpty() {
        return this.length === 0;
    }
    /**
     * Adding node to the end of the LinkedList
     * @param e
     */
    linkLast(e) {
        let newNode = new Node(e);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    /**
     * Insert specified element to the end of the LinkedList
     * @param e
     */
    add(e) {
        this.linkLast(e);
        return true;
    }
    /**
     * add the node in the beginning of the LinkedList
     * @param e
     */
    addFirst(e) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node(e);
        }
        else {
            let tempNode = this.head;
            this.head = new Node(e);
            this.head.next = tempNode;
        }
        this.length++;
    }
    /**
     * add the node in the last of the linkedList
     * @param e
     */
    addLast(e) {
        this.linkLast(e);
    }
    /**
     * add a node at provided index with data
     * @param data
     * @param index
     */
    addAt(data, index) {
        if (index < 0 || index > this.length)
            throw new Error("Illegal argument");
        if (index === 0)
            this.addFirst(data);
        else if (index === this.length)
            this.linkLast(data);
        else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            const newNode = new Node(data);
            const tempNode = currentNode.next;
            currentNode.next = newNode;
            newNode.next = tempNode;
            this.length++;
        }
    }
    /**
     * add the list of element to the linked list after the provided node
     * @param startNode is the staring node from which the list will be get added
     * @param l list of element
     */
    addFrom(startNode, l) {
        if (!l)
            throw new Error('NullPointerException');
        if (!startNode) {
            for (let content of l) {
                this.linkLast(content);
            }
        }
        else {
            for (let content of l) {
                const newNode = new Node(content);
                let tempNode = startNode.next;
                startNode.next = newNode;
                newNode.next = tempNode;
                startNode = newNode;
                this.length++;
            }
        }
    }
    /**
     * add all the element to the end of the linked list
     * @param l list of element
     */
    addAll(l) {
        if (!l)
            throw new Error('NullPointerException');
        let tailNode = this.tail;
        for (let content of l) {
            this.linkLast(content);
        }
        return true;
    }
    /**
     * add the list of element to the linked list from the provided index
     * @param index starting index for insertion
     * @param l list of element
     */
    addAllFrom(index, l) {
        if (!l)
            throw new Error('NullPointerException');
        if (index < 0 || index > this.length)
            throw new Error("Illegal argument");
        if (index === 0) {
            this.addFirst(l[index]);
            l.splice(0, 1);
        }
        else if (index = this.length) {
            return this.addAll(l);
        }
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        this.addFrom(currentNode, l);
        return true;
    }
    /**
     * return the value of first node if it exists.
     */
    peekFirst() {
        if (this.isEmpty())
            throw new Error("The LinkedList is empty");
        return this.head.data;
    }
    /**
     * return the value of last node if it exists.
     */
    peekLast() {
        if (this.isEmpty())
            throw new Error("The LinkedList is empty");
        return this.tail.data;
    }
    /**
     * delete the first node of the linked list
     */
    deleteFirst() {
        if (this.isEmpty())
            throw new Error("The list is empty");
        const data = this.head.data;
        this.head = this.head.next;
        this.length--;
        if (this.isEmpty())
            this.tail = null;
        // return the deleted node data
        return data;
    }
    /**
     * delete the last node of the linked list
     */
    deleteLast() {
        if (this.isEmpty())
            throw new Error("The list is empty");
        let currentNode = this.head;
        let preViousNode = null;
        while (currentNode.next) {
            preViousNode = currentNode;
            currentNode = currentNode.next;
        }
        const data = currentNode.data;
        preViousNode.next = null;
        this.tail = preViousNode;
        this.length--;
        // return the deleted node data
        return data;
    }
    /**
     * delete the first node contains with data
     * @param data
     */
    deleteWith(data) {
        let currentNode = this.head;
        let preViousNode = null;
        while (currentNode.next) {
            if (currentNode.data === data) {
                if (preViousNode === null) {
                    this.head = currentNode.next;
                }
                else {
                    preViousNode.next = currentNode.next;
                }
                this.length--;
                return;
            }
            preViousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode.data === data) {
            preViousNode.next = null;
            this.length--;
            return;
        }
        throw new Error("Node not found");
    }
    /**
     * delete the node in the linked list
     * @param node
     */
    deleteNode(node) {
        if (!node.next) {
            this.deleteLast();
        }
        else if (node == this.head) {
            this.deleteFirst();
        }
        else {
            let currentNode = this.head.next;
            let preViousNode = this.head;
            while (currentNode.next) {
                if (currentNode == node) {
                    preViousNode.next = currentNode.next;
                    this.length--;
                    return;
                }
                preViousNode = currentNode;
                currentNode = currentNode.next;
            }
            throw new Error("Node not found");
        }
    }
    /**
     * delete the node at provided index
     * @param index
     */
    deletAt(index) {
        if (index < 0 || index >= this.length)
            throw new Error("Illegal argument");
        if (index === 0)
            return this.deleteFirst();
        else if (index === this.length - 1)
            return this.deleteLast();
        else {
            let preViousNode = null;
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                preViousNode = currentNode;
                currentNode = currentNode.next;
            }
            const data = currentNode.data;
            preViousNode.next = currentNode.next;
            this.length--;
            return data;
        }
    }
    /**
    * check the data present in the linkedList or not
    * @param data
    */
    contains(data) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data)
                return true;
            currentNode = currentNode.next;
        }
        return false;
    }
    /**
     * clear the linked list
     */
    clear() {
        let node = this.head;
        while (node) {
            let next = node.next;
            node.data = null;
            node.next = null;
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
    print() {
        let dataArray = [];
        for (let node of this.items()) {
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
                }
                else {
                    return { done: true };
                }
            }
        };
    }
    /**
     * Retrieves, but does not remove, the head of this queue.
     */
    element() {
        return this.peekFirst();
    }
    /**
     * Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions.
     * @param e element to be inserted
     */
    offer(e) {
        this.linkLast(e);
        return true;
    }
    /**
     * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
     */
    peek() {
        if (this.isEmpty())
            return null;
        return this.peekFirst();
    }
    /**
     * Retrieves and removes the head of this queue, or returns null if this queue is empty.
     */
    poll() {
        if (this.isEmpty())
            return null;
        let node = this.head;
        this.deleteFirst();
        return node.data;
    }
    /**
     * Retrieves and removes the head of this queue.
     */
    remove() {
        let node = this.head;
        this.deleteFirst();
        return node.data;
    }
}
exports.LinkedList = LinkedList;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
