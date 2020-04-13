export default class BinaryTree<T> {
    head: Node<T> | null;

    constructor(value?: T) {
        this.head = null;
        if (value) {
            this.add(value);
        }
    }

    add(value: T) {
        if (this.head) {
            this.addTo(this.head, value);
        } else {
            this.head = new Node<T>(value);
        }
    }

    addTo(node: Node<T>, value: T) {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new Node<T>(value)
            } else {
                this.addTo(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new Node<T>(value);
            } else {
                this.addTo(node.right, value);
            }
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
}
