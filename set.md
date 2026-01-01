# Set

An ADT that can store unique values, without any particular order.

## Operations

- remove() - remove an element from the set
    - put tombstone in the place of the element
- union() - return the union of two sets
- intersection() - return the intersection of two sets
- difference() - return the difference of two sets
- symmetric_difference() - return the symmetric difference of two sets

## Implementation

- Hash-based, Tree-based

## Disjoint Set

- A set of sets, where each set is a disjoint set.
- For problem: spanning a Graph

### Find operation

- union(i, j): find the root of i and j, and make one of them the parent of the other => 
    - i, j root: O(1)
    - otherwise depends on cost of find
- find(i): find the root of i => O(n)

