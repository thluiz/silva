---
title: "Strategy Pattern"
publishDate: "2026-04-04T08:28:50+01:00"
tags: ["software-engineering", "design-patterns", "gang-of-four"]
---

"Define a family of algorithms, encapsulate each one, and make them interchangeable."

The Strategy pattern (GoF, 1994), also known as Policy, allows selecting an algorithm at runtime. Instead of hardcoding a single algorithm, the class delegates to a strategy object that implements a common interface. Swapping the strategy changes the behavior without modifying the client.

This favors composition over inheritance: behaviors are defined as separate interfaces and classes, decoupling the algorithm from the code that uses it. The client picks (or receives) the appropriate strategy, and the algorithm varies independently.

Fonte: [Strategy pattern — Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern)
