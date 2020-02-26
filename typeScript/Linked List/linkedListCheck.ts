import { LinkedList } from "./linkedList";
import { DoublyLinkedList } from "./doublyLinkedList";

let linkedList = new LinkedList<number>(90);

linkedList.addLast(35);
linkedList.addLast(24);
linkedList.addLast(3);
linkedList.addLast(30);

linkedList.addFirst(100);

linkedList.deleteLast();

linkedList.addAll([1,2,3,5]);

linkedList.print();

let dbList = new DoublyLinkedList<number>(20);

dbList.addLast(10);
dbList.addLast(40);
dbList.addAt(60,2);

dbList.deleteLast();

dbList.print();



