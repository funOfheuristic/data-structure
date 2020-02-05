interface Queue<T>{
    /**
     * (Enqueuing) add the data to the end of the queue and throws exception if it fails to insert the data
     * @param data 
     */
    add(data: T): boolean;
    /**
     * (Enqueuing) add the data to the end of the queue and returns false if it fails to insert the data
     * @param data 
     */
    offer(data: T): boolean;

    /**
     * (Dequeuing) remove the first element from the Queue and throws exception if the queue is empty
     */
    remove(): T;

    /**
     * (Dequeuing) remove the first element from the Queue and returns null if the queue is empty
     */
    poll(): T;

    /**
     * return the first elelment of the queue and throws exception if the queue is empty
     */
    element(): T;

    /**
     * return the first elelment of the queue and returns null if the queue is empty
     */
    peek(): T;

    print(): void;
}