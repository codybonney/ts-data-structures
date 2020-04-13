export default class SinglyLinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    add(data: T) {
        if (this.head) {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }
}

class Node<T> {
    next: Node<T> | null = null;
    data: T;

    constructor(data: T) {
        this.data = data;
    }
}
