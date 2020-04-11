import 'jasmine';
import SinglyLinkedList from '../src/SinglyLinkedList';

describe('SinglyLinkedList', () => {
    it(`should return support appending multiple Nodes`, () => {
        const list = new SinglyLinkedList();

        list.add(5);
        list.add(6);
        list.add(7);

        expect(list.head).toBeDefined();
        expect(list.head && list.head.next).toBeDefined();
        expect(list.head && list.head.data).toBe(5);
        expect(list.head && list.head.next && list.head.next.data).toBe(6);
        expect(list.head && list.head.next && list.head.next.next && list.head.next.next.data).toBe(7);
    });
});
