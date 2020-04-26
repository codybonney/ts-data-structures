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

#### HashTable

```javascript
import { HashTable } from 'ts-data-structures'

const table = new HashTable<string, number>();
```
##### HashTable.size
```javascript
table.size // 16
```
##### HashTable.entries
```javascript
table.entries // 0
```
##### HashTable.add(key, value)
Add a new key and value pair to the table.
The table will be resized if it has too many entries.
If a given key already exists, it's value will be updated.
```javascript
table.add('foo', 42)
table.add('bar', 8)
```
##### HashTable.find(key)
Find the value associated with a given key
```javascript
table.find('foo') // bar
table.find('zap') // undefined
```
##### HashTable.resize(size)
Resize the table to a given size
```javascript
table.resize(32)
table.size // 32
```
