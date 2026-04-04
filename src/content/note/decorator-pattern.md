---
title: "Decorator Pattern"
publishDate: "2026-04-04T08:22:50+01:00"
tags: ["software-engineering", "design-patterns", "gang-of-four"]
---

"Attach additional responsibilities to an object dynamically."

The Decorator pattern (GoF, 1994) extends the behavior of an individual object without affecting other instances of the same class. A decorator wraps the original object, implementing the same interface, and adds behavior before or after delegating to the wrapped object.

Multiple decorators can be stacked, each adding new functionality. This is an alternative to subclassing: instead of creating a class for every combination of features, you compose behaviors at runtime. It supports both the Single Responsibility Principle and the Open/Closed Principle.

Fonte: [Decorator pattern — Wikipedia](https://en.wikipedia.org/wiki/Decorator_pattern)
