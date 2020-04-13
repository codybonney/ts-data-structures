export default class BinaryTree<T> {
    head: Node<T> | null = null;

    constructor(...values: T[]) {
        this.add(...values);
    }

    /**
     * Add a new Node to the tree
     * @param values
     */
    add = (...values: T[]) => {
        values.map(value => {
            if (this.head) {
                this.head.attach(value);
            } else {
                this.head = new Node(value);
            }
        });
    }
}

class Node<T> {
    left: Node<T> | null = null;
    right: Node<T> | null = null;
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    /**
     * Attach a new child Node
     * @param value
     */
    attach = (value: T) => {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new Node(value);
            } else {
                this.left.attach(value);
            }
        } else {
            if (this.right === null) {
                this.right = new Node(value);
            } else {
                this.right.attach(value);
            }
        }
    }
}
