export class Stack<T>{
    private content: Array<T>;
    constructor(e: T = null){
        this.content = new Array<T>();
        if(e){
            this.content.push(e);
        }        
    }

    /**
     * check for is stack is empty
     */
    isEmpty(): boolean{
        return this.content.length === 0;
    }

    /**
     * Looks at the item at the top of this stack without removing it from the stack
     */
    peek(): T{
        return this.content[this.content.length - 1];
    }

    /**
     * Removes the item at the top of this stack and returns that object as the value of this function
     */
    pop(): T{
        return this.content.pop();
    }

    /**
     * Pushes an item onto the top of this stack
     * @param item of the stack
     */
    push(item: T){
        return this.content.push(item);
    }

    /**
     * return the distance of the item from the top of the array
     * @param e 
     */
    search(e: T){
        let index = this.content.indexOf(e);
        if(index === -1) return -1;
        else{
            return this.content.length - 1 - index;
        }
    }

    print(){
        const tempData = Object.assign([], this.content);
        console.log(tempData.reverse());
    }
}