"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = require("../Linked List/linkedList");
let queue = new linkedList_1.LinkedList();
queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue.poll());
console.log(queue.peek());
queue.print();
