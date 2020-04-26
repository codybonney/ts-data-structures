export default class SinglyLinkedList<T> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    length: number = 0; // nodes in list

    constructor(...values: T[]) {
        this.add(...values);
    }

    add = (...values: T[]) => {
        values.map(value => {
            const node = new Node(value);

            if (this.tail) {
                this.tail.next = node;
                this.tail = this.tail.next;
            } else {
                this.head = node;
                this.tail = node;
            }
            this.length++;
        });
    };

    remove = (...values: T[]) => {
        values.map(value => {
            let node = this.head;
            let prev: Node<T> | null = null;

            while (node) {
                if (node.value === value) {
                    const isHead = !prev;
                    const isTail = !node.next;
                    if (isHead && isTail) {
                        this.head = null;
                        this.tail = null;
                    } else if (isHead) {
                        this.head = node.next;
                    } else if (isTail) {
                        (prev as Node<T>).next = null;
                        this.tail = prev;
                    } else {
                        (prev as Node<T>).next = node.next;
                    }
                    this.length--;
                } else {
                    prev = node;
                }
                node = node.next;
            }
        });
    };

    forEach = (callback: (value: T) => void) => {
        let node = this.head;
        while (node) {
            callback(node.value);
            node = node.next;
        }
    };

    find = (test: (value: T) => boolean): T | void => {
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

    toArray = (): T[] => {
        let result: T[] = [];
        this.forEach(value => result.push(value));
        return result;
    }
}

class Node<T> {
    next: Node<T> | null = null;
    value: T;

    constructor(data: T) {
        this.value = data;
    }
}
