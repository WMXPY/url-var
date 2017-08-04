# url-var

[![npm version](https://badge.fury.io/js/url-var.svg)](https://badge.fury.io/js/url-var)
[![downloads](https://img.shields.io/npm/dm/url-var.svg)](https://badge.fury.io/js/url-var)

## Install

```bash
    npm i url-var --save
```

## Usage

```js
import a from 'url-var';

//address: http://example.something/?a=10&b=20
a.url('a'); // = 10
a.url('a','b'); // = {a:10,b:20}

//address: whatever
a.str('http://example.something/?a=10&b=20','a') // = 10
a.str('http://example.something/?a=10&b=20','a','b') // = {a:10,b:20}

```
