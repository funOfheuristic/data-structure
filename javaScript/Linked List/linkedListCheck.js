"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = require("./linkedList");
const doublyLinkedList_1 = require("./doublyLinkedList");
let linkedList = new linkedList_1.LinkedList(90);
linkedList.addLast(35);
linkedList.addLast(24);
linkedList.addLast(3);
linkedList.addLast(30);
linkedList.addFirst(100);
linkedList.deleteLast();
linkedList.addAll([1, 2, 3, 5]);
linkedList.print();
let dbList = new doublyLinkedList_1.DoublyLinkedList(20);
dbList.addLast(10);
dbList.addLast(40);
dbList.addAt(60, 2);
dbList.deleteLast();
dbList.print();
