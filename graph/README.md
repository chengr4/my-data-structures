# Graph

## Graph 最重要的兩種表示法

- Adjacency Matrix
- Adjacency List

> 儲存所有 node 之後可以產生應用，例如找出 spanning tree

## Spanning Tree

- A tree consisting solely of edges in `G` and including all vertices in `G` in called a spanning tree
- = 希望用最少的 edge 把 G 中的所有頂點都連接起來
- 可以用 DFS, BFS 找出 spanning tree
- no cycle

## Union Find

aka disjoint set data structure

- 用於處理一些 Disjoint sets 的合併及查詢問題

> Disjoint set means two sets do not have anything common (無交集)

- It is a Data structure
- Use `union` method:
- Use `find` method: if two nodes appear in the same set **you build**, it has a cycle

## Algorithms

TO [My Algorithms](https://github.com/chengr4/my-algorithms/tree/main/graph)

## References

- Leetcode 207
- [Abdul Bari; 1.12 Disjoint Sets Data Structure - Weighted Union and Collapsing Find (2018.04)](https://youtu.be/wU6udHRIkcc)