export default class BinaryTree<T> {
    head: Node<T> | null = null;

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
     * @param node
     */
    attach = (node: Node<T>) => {
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node;
            } else {
                this.left.attach(node);
            }
        } else {
            if (this.right === null) {
                this.right = node;
            } else {
                this.right.attach(node);
            }
        }
    }
}
