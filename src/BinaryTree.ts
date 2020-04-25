export default class BinaryTree<T> {
    head: Node<T> | null = null;
    length: number = 0; // nodes in tree

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
}

class Node<T> {
    left: Node<T> | null = null;
    right: Node<T> | null = null;
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

/**
 * Attach Node b to a leaf of Node a
 * @param a
 * @param b
 */
const attach = <T>(a: Node<T>, b: Node<T>) => {
    if (b.value < a.value) {
        if (a.left === null) {
            a.left = b;
        } else {
            attach(a.left, b)
        }
    } else {
        if (a.right === null) {
            a.right = b;
        } else {
            attach(a.right, b);
        }
    }
};
