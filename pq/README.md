# Priority Queue

- Abstract data type (ADT) 

| Implementation         |   push   | pop-min  | peek | update |  build  |
|:----------------------:|:--------:|:--------:|:----:|:------:|:-------:|
| unsorted array         |   O(1)   |   O(n)   | O(n) |  O(n)  |  O(n)   |
| sorted array           |   O(n)   |   O(n)   | O(1) |  O(n)  | O(nlogn) |
| reversely sorted array |   O(n)   |   O(1)   | O(1) |  O(n)  | O(nlogn) |
| sorted linked list     |   O(n)   |   O(1)   | O(1) |  O(n)  | O(nlogn) |
| binary heap            | O(log n) | O(log n) | O(1) |  ?     | O(n)   |

Two famous algorithms that require dunamic pq:

1. Dijkstra's algorithm for shortest path
2. Prim's algorithm for minimum spanning tree

## Operations

- push: Insert an element into the initialized pq
- peek: Return the top-priority element of the pq
- pop: Remove and return the top-priority element from the pq
- update: Increase or decrease the priority of an element in the pq
