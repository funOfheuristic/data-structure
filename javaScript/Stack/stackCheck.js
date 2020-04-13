"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./stack");
let stack = new stack_1.Stack(20);
stack.push(30);
stack.push(50);
stack.push(60);
stack.push(200);
stack.push(10);
console.log(stack.search(200));
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();
