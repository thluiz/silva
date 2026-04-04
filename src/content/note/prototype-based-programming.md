---
title: "Prototype-Based Programming"
publishDate: "2026-04-04T08:22:52+01:00"
tags: ["software-engineering", "javascript", "object-oriented"]
---

In prototype-based programming there are no classes. Objects inherit directly from other objects through a prototype link.

JavaScript is the most well-known prototype-based language. Every object has an internal link to another object — its prototype. When a property isn't found on the object itself, the engine walks up the prototype chain until it finds the property or reaches `null`.

This means behavior reuse happens by cloning and extending existing objects, not by instantiating class blueprints. You can add or change properties on any object at runtime, and those changes propagate through the chain.

ES6 introduced the `class` keyword, but it's syntactic sugar — underneath, JavaScript still uses prototypal inheritance. `class Foo extends Bar` is an abstraction over `Foo.prototype = Object.create(Bar.prototype)`. Understanding the prototype chain remains essential for debugging and reasoning about the language.

Fonte: [Inheritance and the prototype chain — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
