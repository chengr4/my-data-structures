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

## Build Adjacency List

- Will give edges and nodes to build it

```javascript
// Eg JavaScript

const node = 3;
const edges = [[0,1],[1,2],[2,0]];
const adjacencyList = new Array(n).fill(0).map(() => new Array());
for (const [v1, v2] of edges) {
  graph[v1].push(v2);
  graph[v2].push(v1);
}

```

## Algorithms

TO [My Algorithms](https://github.com/chengr4/my-algorithms/tree/main/graph)

## References

- Leetcode 207
