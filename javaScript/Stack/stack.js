"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor(e = null) {
        this.content = new Array();
        if (e) {
            this.content.push(e);
        }
    }
    /**
     * check for is stack is empty
     */
    isEmpty() {
        return this.content.length === 0;
    }
    /**
     * Looks at the item at the top of this stack without removing it from the stack
     */
    peek() {
        return this.content[this.content.length - 1];
    }
    /**
     * Removes the item at the top of this stack and returns that object as the value of this function
     */
    pop() {
        return this.content.pop();
    }
    /**
     * Pushes an item onto the top of this stack
     * @param item of the stack
     */
    push(item) {
        return this.content.push(item);
    }
    /**
     * return the distance of the item from the top of the array
     * @param e
     */
    search(e) {
        let index = this.content.indexOf(e);
        if (index === -1)
            return -1;
        else {
            return this.content.length - 1 - index;
        }
    }
    print() {
        const tempData = Object.assign([], this.content);
        console.log(tempData.reverse());
    }
}
exports.Stack = Stack;
