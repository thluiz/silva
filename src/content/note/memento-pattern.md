---
title: "Memento Pattern"
publishDate: "2026-04-04T08:27:50+01:00"
tags: ["software-engineering", "design-patterns", "gang-of-four"]
---

"Capture and externalize an object's internal state so that the object can be restored to this state later."

The Memento pattern (GoF, 1994) enables undo, version control, and state rollback without violating encapsulation. It uses three objects: the originator (whose state is saved), the memento (an immutable snapshot of that state), and the caretaker (who stores mementos and decides when to restore).

The originator creates a memento containing a snapshot of its current state. The caretaker holds it. When needed, the caretaker passes the memento back to the originator, which restores itself. The caretaker never inspects or modifies the memento's contents.

Fonte: [Memento pattern — Wikipedia](https://en.wikipedia.org/wiki/Memento_pattern)
