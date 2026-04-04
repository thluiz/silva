---
title: "Prototype Pattern"
publishDate: "2026-04-04T08:20:50+01:00"
tags: ["software-engineering", "design-patterns", "gang-of-four"]
---

"Create new objects by copying an existing object."

The Prototype pattern (GoF, 1994) solves the problem of creating objects when the specific type should be determined at runtime. Instead of instantiating classes directly, you clone a prototype — an existing object that returns a copy of itself.

This is useful when object creation is expensive (complex initialization, database reads) or when the system should be independent of how its products are created. The client simply calls `clone()` on the prototype without knowing the concrete class.

Fonte: [Prototype pattern — Wikipedia](https://en.wikipedia.org/wiki/Prototype_pattern)
