# get-property-names v1.0.0

[![Circle CI](https://circleci.com/gh/kt3k/get-property-names.svg?style=svg)](https://circleci.com/gh/kt3k/get-property-names)
[![codecov](https://codecov.io/gh/kt3k/get-property-names/branch/master/graph/badge.svg)](https://codecov.io/gh/kt3k/get-property-names)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Non-`own` version of `Object.getOwnPropertyNames()`

# Install

    npm install get-property-names

# Usage

```js
const getPropertyNames = require('get-property-names')

const a = {a: 1, b: 2}

getPropertyNames(a)
//=> this returns ['a', 'b']

class A {
  foo () {}
}

class B extends A {
  bar () {}
}

getPropertyNames(new B())
//=> this returns `['constructor', 'bar', 'foo']`

class C extends A {
  constructor () {
    super()
    this.baz = 1
  }
}

getPropertyNames(new C())
//=> this returns `['baz', 'constructor', 'foo']`
```

As the examples above, `getPropertyNames` returns the list of all the property names of an object, which includes non enumerable properties in its prototype chain.

# License

MIT
