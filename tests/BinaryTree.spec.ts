import 'jasmine';
import BinaryTree from '../src/BinaryTree';

describe('BinaryTree', () => {
    it(`should support creating an empty tree`, () => {
        const tree = new BinaryTree();
        expect(tree.head).toBeNull();
    });

    it(`should support creating a tree with an initial node`, () => {
        const tree = new BinaryTree(5);
        expect(tree.head).toBeDefined();
        expect(tree.head && tree.head.value).toEqual(5);
    });

    it(`should support adding nodes to a tree`, () => {
        const tree = new BinaryTree();
        tree.add(5);
        tree.add(8);
        tree.add(3);
        tree.add(2);
        tree.add(9);
        expect(tree.head).toBeDefined();
        expect(tree.head && tree.head.left).toBeDefined();
        expect(tree.head && tree.head.left && tree.head.left.left).toBeDefined();
        expect(tree.head && tree.head.right).toBeDefined();
        expect(tree.head && tree.head.right && tree.head.right.right).toBeDefined();
        expect(tree.head && tree.head.left && tree.head.left.value).toEqual(3);
        expect(tree.head && tree.head.left && tree.head.left.left && tree.head.left.left.value).toEqual(2);
        expect(tree.head && tree.head.right && tree.head.right.value).toEqual(8);
        expect(tree.head && tree.head.right && tree.head.right.right && tree.head.right.right.value).toEqual(9);
    });
});
