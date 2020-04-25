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

    describe(`forEach`, () => {
        it(`should iterate over nodes`, () => {
            const list = new SinglyLinkedList(1, 2 ,3);
            let results: number[] = [];
            list.forEach(value => {
                results.push(value);
            });
            expect(results).toEqual([1, 2, 3]);
        });
    });

    describe(`find`, () => {
        it(`should return an element if found`, () => {
            const list = new SinglyLinkedList(1, 2, 3);
            const result = list.find(value => value === 2);
            expect(result).toBe(2);
        });

        it(`should return undefined if not found`, () => {
            const list = new SinglyLinkedList();
            const result = list.find(value => value === 2);
            expect(result).toBeUndefined();
        });
    });

});
