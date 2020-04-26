import HashCode from 'ts-hashcode'
import SinglyLinkedList from './SinglyLinkedList';

type Bucket<K, V> = SinglyLinkedList<Entry<K, V>>

export default class HashTable<K, V> {
    buckets: Array<Bucket<K, V>> = [];
    entries: number = 0;

    constructor(size = 16) {
        for (let i = 0; i < size; i++) {
            this.buckets[i] = new SinglyLinkedList();
        }
    }

    /**
     * Get the size of the table
     */
    get size(): number {
        return this.buckets.length;
    }

    /**
     * Get the number of entries required before resizing the table
     */
    get cutoff(): number {
        return this.size * 0.75;
    }

    /**
     * Generate a buckets array index for a given key
     * @param key
     */
    accessIndex = (key: K): number => {
        return Math.abs(HashCode(key) % this.size);
    };

    /**
     * Add a new key and value to the table.
     * If a given key already exists, it's value will be updated
     * @param key
     * @param value
     */
    add = (key: K, value: V) => {
        if (this.entries + 1 > this.cutoff) {
            this.resize(this.size * 2);
        }

        const index = this.accessIndex(key);
        const existing = this.buckets[index].find(entry => entry.key === key);

        if (existing) {
            existing.value = value;
        } else {
            this.buckets[index].add(new Entry(key, value));
            this.entries++;
        }
    };

    /**
     * Resize the table to a given size
     * @param size
     */
    resize = (size: number) => {
        const table = new HashTable<K, V>(size);
        this.buckets.forEach(bucket => {
            bucket.forEach(entry => {
                table.add(entry.key, entry.value);
            });
        });
        this.buckets = table.buckets;
        this.entries = table.entries;
        delete table.buckets; // allow table to get garbage collected
    };

    /**
     * Find the value associated with a given key
     * @param key
     */
    find = (key: K): V | void => {
        const index = this.accessIndex(key);
        const existing = this.buckets[index].find(entry => entry.key === key);
        if (existing) {
            return existing.value;
        }
    };
}

/**
 * Represents an entry in the table
 */
class Entry<K, V> {
    key: K;
    value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}
