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
     * Get the number of buckets in the table.
     */
    get size(): number {
        return this.buckets.length;
    }

    /**
     * Get the number of entries required before resizing the table.
     */
    get cutoff(): number {
        return this.size * 0.75;
    }

    /**
     * Add a new entry to the table.
     * The table will be resized if it contains too many entries.
     * If an entry with the given key already exists, it's value will be updated.
     * @param key
     * @param value
     */
    add = (key: K, value: V) => {
        if (this.entries + 1 > this.cutoff) {
            this.resize(this.size * 2);
        }

        const entry = this.findEntry(key);
        if (entry) {
            entry.value = value;
        } else {
            this.findBucket(key).add(new Entry(key, value));
            this.entries++;
        }
    };

    /**
     * Remove an entry from the table
     * @param key
     */
    remove = (key: K) => {
        const bucket = this.findBucket(key);
        const entry = this.findEntry(key);
        if (entry) {
            bucket.remove(entry);
            this.entries--;
        }
    };

    /**
     * Resize the table to a given number of buckets.
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
     * Find the value associated with a given key.
     * @param key
     */
    find = (key: K): V | void => {
        const entry = this.findEntry(key);
        if (entry) {
            return entry.value;
        }
    };

    /**
     * Generate a bucket array index for a given key.
     * @param key
     */
    findIndex = (key: K): number => {
        return Math.abs(HashCode(key) % this.size);
    };

    /**
     * Find the Bucket associated with a given key.
     * @param key
     */
    findBucket = (key: K): Bucket<K, V> => {
        const index = this.findIndex(key);
        return this.buckets[index];
    };

    /**
     * Find the Entry associated with a given key.
     * @param key
     */
    findEntry = (key: K): Entry<K, V> | void => {
        const bucket = this.findBucket(key);
        return bucket.find(entry => entry.key === key);
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
