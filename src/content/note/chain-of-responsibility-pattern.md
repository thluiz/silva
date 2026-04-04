---
title: "Chain of Responsibility Pattern"
publishDate: "2026-04-04T08:25:50+01:00"
tags: ["software-engineering", "design-patterns", "gang-of-four"]
---

"Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request."

The Chain of Responsibility pattern (GoF, 1994) passes a request along a chain of handlers. Each handler decides either to process the request or to forward it to the next handler in the chain. The sender doesn't know which handler will process it.

It's structurally similar to the Decorator pattern, with one key difference: in a decorator chain, all decorators process the request; in a chain of responsibility, exactly one handler processes it and the chain stops.

Real-world example: event handling in UI frameworks — a click event bubbles up from a button to its container to the window until something handles it.

Fonte: [Chain-of-responsibility pattern — Wikipedia](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern)
