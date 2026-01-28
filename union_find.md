# Union find

aka disjoint set data structure

- A data structure that stores a collection of disjoint sets.
- 用於處理一些 Disjoint sets 的合併及查詢問題

> Disjoint set means two sets do not have anything common (無交集)

- It is a Data structure
- Use `union(x, y)` method:
- Use `find(x)` method: if two nodes appear in the same set **you build**, it has a cycle
- Useful for graphs
- Time complexity: Both `union` and `find` operations can be done in nearly constant time, O(\alpha(n)), where α is the inverse Ackermann function.
    - `\alpha(n) <= 4` => ~ O(1)

## References

- [Abdul Bari; 1.12 Disjoint Sets Data Structure - Weighted Union and Collapsing Find (2018.04)](https://youtu.be/wU6udHRIkcc)