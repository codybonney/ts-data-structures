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

##### create

```javascript
import { HashTable } from 'ts-data-structures'

const table = new HashTable<string, number>();
```
##### size
```javascript
table.size // 16
```
##### add(key, value)
```javascript
table.add('foo', 42)
table.add('bar', 8)
```
##### find(key)
```javascript
table.find('foo') // bar
table.find('zap') // undefined
```
