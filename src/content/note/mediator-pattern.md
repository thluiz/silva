---
title: "Mediator Pattern"
publishDate: "2026-04-04T08:17:25+01:00"
tags: ["software-engineering", "design-patterns", "gang-of-four"]
---

"Define an object that encapsulates how a set of objects interact."

The Mediator is one of the 23 design patterns documented in the Gang of Four book (Gamma, Helm, Johnson, Vlissides, 1994). With this pattern, objects no longer communicate directly with each other — instead, they communicate through a mediator object.

This reduces the dependencies between communicating objects, promoting loose coupling. Objects don't need to refer to each other explicitly, and their interactions can be varied independently by changing the mediator.

A common real-world analogy: an air traffic control tower. Planes don't coordinate with each other directly — they all communicate through the tower, which manages the interactions.

Fonte: [Mediator pattern — Wikipedia](https://en.wikipedia.org/wiki/Mediator_pattern)
