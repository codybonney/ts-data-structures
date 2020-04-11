export default class SinglyLinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    append(data: T) {
        let node = this.head;
        if (node) {
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
