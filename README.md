## ts-data-structures

[![Build Status](https://travis-ci.com/codybonney/ts-data-structures.svg?branch=master)](https://travis-ci.com/codybonney/ts-data-structures)
[![Coverage Status](https://coveralls.io/repos/github/codybonney/ts-data-structures/badge.svg?branch=master)](https://coveralls.io/github/codybonney/ts-data-structures?branch=master)
[![npm version](http://img.shields.io/npm/v/ts-data-structures.svg?style=flat)](https://npmjs.org/package/ts-data-structures "View this project on npm")

### Description:
A collection of common data structures written in TypeScript

### Installation:
```bash
npm install ts-data-structures
```

#### HashTable<Key, Value>
Creates a hash table of key and value pairs. Defaults to a size of 16 buckets.
Each bucket represents a Singly Linked List of entries.
```javascript
import { HashTable } from 'ts-data-structures'

// create a HashTable that takes keys of type string and values of type number
const table = new HashTable<string, number>();

// create a HashTable that has a size of 64 buckets
const biggerTable = new HashTable(64);
```
#### HashTable.size
Get the number of buckets in the table.
```javascript
table.size // 16
```
#### HashTable.entries
Get the number of entries in the table.
```javascript
table.entries // 0
```
#### HashTable.add(key, value)
Add a new entry to the table.
The table will be resized if it contains too many entries.
If an entry with the given key already exists, it's value will be updated.
```javascript
table.add('foo', 42)
table.add('bar', 8)
```
#### HashTable.find(key)
Find the value associated with a given key.
```javascript
table.find('foo') // 42
table.find('zap') // undefined
```
#### HashTable.resize(size)
Resize the table to a given number of buckets.
```javascript
table.resize(32)
table.size // 32
```
#### HashTable.remove(key)
Remove an entry from the table
```javascript
table.entries // 2
table.remove('foo')
table.entries // 1
```
