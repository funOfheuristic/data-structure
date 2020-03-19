import { LinkedList } from "../Linked List/linkedList";

let queue: Queue<number> = new LinkedList<number>();

queue.add(1);
queue.add(2);
queue.add(3);

console.log(queue.poll());
console.log(queue.peek());

queue.print();