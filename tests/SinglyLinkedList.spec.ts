import 'jasmine';
import SinglyLinkedList from '../src/SinglyLinkedList';

describe('SinglyLinkedList', () => {
    it(`should return support appending multiple Nodes`, () => {
        const list = new SinglyLinkedList(5, 6, 7);

        expect(list.head).toBeDefined();
        expect(list.head && list.head.next).toBeDefined();
        expect(list.head && list.head.value).toBe(5);
        expect(list.head && list.head.next && list.head.next.value).toBe(6);
        expect(list.head && list.head.next && list.head.next.next && list.head.next.next.value).toBe(7);
    });

    it(`should track length`, () => {
        const list = new SinglyLinkedList();

        expect(list.length).toBe(0);
        list.add(1);
        expect(list.length).toBe(1);
        list.add(2, 3, 4);
        expect(list.length).toBe(4);
    });
});
