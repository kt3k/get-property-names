'use strict'

const test = require('tape')
const getPropertyNames = require('./')

test('objects', t => {
  t.plan(2)
  t.deepEqual(getPropertyNames({a: 1}), ['a'])
  t.deepEqual(getPropertyNames({a: 1, b: 2}), ['a', 'b'])
})

test('custom class instances', t => {
  t.plan(3)

  class A {
    foo () {}
  }

  class B extends A {
    bar () {}
  }

  class C extends A {
    constructor () {
      super()
      this.baz = 1
    }
  }

  t.deepEqual(getPropertyNames(new A()), ['constructor', 'foo'])
  t.deepEqual(getPropertyNames(new B()), ['constructor', 'bar', 'foo'])
  t.deepEqual(getPropertyNames(new C()), ['baz', 'constructor', 'foo'])
})
