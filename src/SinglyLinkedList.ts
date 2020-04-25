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
                attach(this.head, node);
            } else {
                this.head = node;
            }
            this.length++;
        });
    };

    forEach = (callback: (value: T) => void) => {
        let node = this.head;
        while (node) {
            callback(node.value);
            node = node.next;
        }
    };

    find = (test: (value: T) => boolean) => {
        let node = this.head;
        let result: T | undefined;

        while (node) {
            if (test(node.value)) {
                result = node.value;
                break;
            }
            node = node.next;
        }
        return result;
    };
}

class Node<T> {
    next: Node<T> | null = null;
    value: T;

    constructor(data: T) {
        this.value = data;
    }
}

/**
 * Attach Node b to a leaf of Node a
 * @param a
 * @param b
 */
const attach = <T>(a: Node<T>, b: Node<T>) => {
    if (a.next !== null) {
        attach(a.next, b);
    } else {
        a.next = b;
    }
};
