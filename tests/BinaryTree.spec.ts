import 'jasmine';
import BinaryTree from '../src/BinaryTree';

describe('BinaryTree', () => {
    it(`should support creating an empty tree`, () => {
        const tree = new BinaryTree();
        expect(tree.head).toBeNull();
        expect(tree.length).toEqual(0);
    });

    it(`should support creating a tree with an initial node`, () => {
        const tree = new BinaryTree(5);
        expect(tree.head).toBeDefined();
        expect(tree.head && tree.head.value).toEqual(5);
    });

    it(`should support adding nodes to a tree`, () => {
        const tree = new BinaryTree(5, 8, 3, 2, 9);

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

    it(`should track length`, () => {
        const tree = new BinaryTree();

        expect(tree.length).toBe(0);
        tree.add(1);
        expect(tree.length).toBe(1);
        tree.add(2, 3, 4);
        expect(tree.length).toBe(4);
    });
});
