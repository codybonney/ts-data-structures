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

    get length(): number {
        return this.buckets.length;
    }

    get cutoff(): number {
        return this.length * 0.75;
    }

    hashValue = (key: K): number => {
        return Math.abs(HashCode(key) % this.length);
    };

    add = (key: K, value: V) => {
        if (this.entries + 1 > this.cutoff) {
            this.resize();
        }

        const index = this.hashValue(key);
        const existing = this.buckets[index].find(entry => entry.key === key);

        if (existing) {
            existing.value = value;
        } else {
            this.buckets[index].add(new Entry(key, value));
            this.entries++;
        }
    };

    resize = () => {
        const table = new HashTable<K, V>(this.length * 2);
        this.buckets.forEach(bucket => {
            bucket.forEach(entry => {
                table.add(entry.key, entry.value);
            });
        });
        this.buckets = table.buckets;
        this.entries = table.entries;
        delete table.buckets; // allow table to get garbage collected
    };

    find = (key: K): V | void => {
        const index = this.hashValue(key);
        const existing = this.buckets[index].find(entry => entry.key === key);
        if (existing) {
            return existing.value;
        }
    };
}

class Entry<K, V> {
    key: K;
    value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}
