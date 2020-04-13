export default class SinglyLinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    add(value: T) {
        if (this.head) {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node(value);
        } else {
            this.head = new Node(value);
        }
    }
}

class Node<T> {
    next: Node<T> | null = null;
    value: T;

    constructor(data: T) {
        this.value = data;
    }
}
