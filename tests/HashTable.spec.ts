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
            expect(table.size).toEqual(4);
            table.add('d', 4);
            expect(table.size).toEqual(8);
        });

        it(`should update an existing entry if it's key already exists`, () => {
            const table = new HashTable(4);
            table.add('a', 1);
            table.add('a', 2);
            expect(table.entries).toEqual(1);
            expect(table.find('a')).toEqual(2);
        });
    });

    describe(`find`, () => {
        it(`should return a value if an entry exists`, () => {
            const table = new HashTable(4);
            table.add('a', 1);
            expect(table.find('a')).toEqual(1);
        });

        it(`should return undefined if an entry does not exist`, () => {
            const table = new HashTable(4);
            table.add('a', 1);
            expect(table.find('b')).toBeUndefined();
        });
    });

    describe(`remove`, () => {
        it(`should remove an entry from the table if it exists`, () => {
            const table = new HashTable();
            table.add('a', 1);
            expect(table.find('a')).toEqual(1);
            expect(table.entries).toEqual(1);
            table.remove('a');
            expect(table.find('a')).toEqual(undefined);
            expect(table.entries).toEqual(0);
        });
    });
});
