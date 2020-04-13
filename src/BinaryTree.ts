export default class BinaryTree<T> {
    head: Node<T> | null;

    constructor(value?: T) {
        this.head = null;
        if (value) {
            this.add(value);
        }
    }

    /**
     * Add a new Node to the tree
     * @param value
     */
    add(value: T) {
        if (this.head) {
            this.head.add(value);
        } else {
            this.head = new Node<T>(value);
        }
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
     * Add a new Node as a child to this Node
     * @param value
     */
    add(value: T) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new Node<T>(value)
            } else {
                this.left.add(value);
            }
        } else {
            if (this.right === null) {
                this.right = new Node<T>(value);
            } else {
                this.right.add(value);
            }
        }
    }
}
