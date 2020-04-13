export default class SinglyLinkedList<T> {
    head: Node<T> | null = null;
    length: number = 0; // nodes in list

    constructor(...values: T[]) {
        this.add(...values);
    }

    add = (...values: T[]) => {
        values.map(value => {
            const node = new Node(value);

            if (this.head) {
                this.head.attach(node);
            } else {
                this.head = node;
            }
            this.length++;
        });
    }
}

class Node<T> {
    next: Node<T> | null = null;
    value: T;

    constructor(data: T) {
        this.value = data;
    }

    attach = (node: Node<T>) => {
        if (this.next !== null) {
            this.next.attach(node);
        } else {
            this.next = node;
        }
   }
}
