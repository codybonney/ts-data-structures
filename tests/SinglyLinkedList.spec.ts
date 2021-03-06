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
        it(`should return a value if found`, () => {
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


    describe(`remove`, () => {
        it(`should remove a value that is not the head or tail`, () => {
            const list = new SinglyLinkedList(1, 2, 3);
            list.remove(2);
            expect(list.toArray()).toEqual([1, 3]);
            expect(list.head && list.head.value).toBe(1);
            expect(list.tail && list.tail.value).toBe(3);
        });

        it(`should remove a value that is the head`, () => {
            const list = new SinglyLinkedList(1, 2, 3);
            list.remove(1);
            expect(list.toArray()).toEqual([2, 3]);
            expect(list.head && list.head.value).toBe(2);
            expect(list.tail && list.tail.value).toBe(3);
        });

        it(`should remove a value that is the tail`, () => {
            const list = new SinglyLinkedList(1, 2, 3);
            list.remove(3);
            expect(list.toArray()).toEqual([1, 2]);
            expect(list.head && list.head.value).toBe(1);
            expect(list.tail && list.tail.value).toBe(2);
        });

        it(`should remove a value belonging to the only node in the list`, () => {
            const list = new SinglyLinkedList(1);
            list.remove(1);
            expect(list.toArray()).toEqual([]);
            expect(list.head).toBe(null);
            expect(list.tail).toBe(null);
        });

        it(`should remove all the values in a list`, () => {
            const list = new SinglyLinkedList(1, 1, 1);
            list.remove(1);
            expect(list.toArray()).toEqual([]);
            expect(list.head).toBe(null);
            expect(list.tail).toBe(null);
        });

        it(`should remove all the values at the beginning of a list`, () => {
            const list = new SinglyLinkedList(1, 1, 1, 2, 3);
            list.remove(1);
            expect(list.toArray()).toEqual([2, 3]);
            expect(list.head && list.head.value).toBe(2);
            expect(list.tail && list.tail.value).toBe(3);
        });

        it(`should remove all the values at the end of a list`, () => {
            const list = new SinglyLinkedList(1, 2, 3, 3, 3, 3, 3, 3);
            list.remove(3);
            expect(list.toArray()).toEqual([1, 2]);
            expect(list.head && list.head.value).toBe(1);
            expect(list.tail && list.tail.value).toBe(2);
        });

        it(`should remove multiple values if they exist in the list`, () => {
            console.log('');
            const list = new SinglyLinkedList(1, 2, 2, 2, 2, 2, 3);
            list.remove(2);
            expect(list.toArray()).toEqual([1, 3]);
            expect(list.head && list.head.value).toBe(1);
            expect(list.tail && list.tail.value).toBe(3);
            expect(list.length).toEqual(2);
        });
    });
});
