import 'jasmine';
import HashTable from '../src/HashTable';

describe('HashTable', () => {
    it(`should support creating an empty instance`, () => {
        const table = new HashTable();
        expect(table.entries).toEqual(0);
    });

    it(`should support adding an entry`, () => {
        const table = new HashTable();
        table.add('foo', 'bar');
        expect(table.entries).toEqual(1);
    });

    describe(`add`, () => {
        it(`should automatically resize when adding an entry`, () => {
            const table = new HashTable(4);
            table.add('a', 1);
            table.add('b', 2);
            table.add('c', 3);
            expect(table.length).toEqual(4);
            table.add('d', 4);
            expect(table.length).toEqual(8);
        });

        it(`should update an existing entry if it's key already exists`, () => {
            const table = new HashTable(4);
            table.add('a', 1);
            table.add('a', 2);
            expect(table.entries).toEqual(1);
            // todo find the entry and verify its value
        })
    })

});
