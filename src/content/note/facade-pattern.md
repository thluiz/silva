---
title: "Facade Pattern"
publishDate: "2026-04-04T08:23:50+01:00"
tags: ["software-engineering", "design-patterns", "gang-of-four"]
---

"Provide a unified interface to a set of interfaces in a subsystem."

The Facade pattern (GoF, 1994) provides a simplified interface to a complex body of code. Like a building's façade, it presents a clean front while hiding the complexity behind it.

A facade wraps a set of classes and their interactions into a single, easier-to-use interface. The underlying subsystem classes remain accessible for clients that need fine-grained control, but most consumers only interact with the facade. It reduces coupling between client code and subsystem internals.

Fonte: [Facade pattern — Wikipedia](https://en.wikipedia.org/wiki/Facade_pattern)
