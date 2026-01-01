# BST

- aka. ordered/sorted binary tree
- 必左邊 subtree 小，右邊 subtree 大
- 

> 用 leftSize 可以找第 `k` 大的值 (?)

- Array can use Binary Search, while List 可以解決 Array 的新增效率問題 => BST 兼具兩者
- find: `O(log(n))`
- insert: `O(log(n))`: New elements are always inserted into a BST as leaves
- delete: `O(log(n))`

## Remove an interior node with two children

1. Get the inorder successor of that node (the next node in in-order traversal of the BST)
2. Replace the node with the inorder successor.
3. Remove the inorder successor from its original position (recursively)

>  a node N's in-order successor is always the leftmost node in N’s right subtree

## Balanced BST

- Bad for I/O, therefore, InnoDB does not pick it as data storage

### AVL Tree

> Adelson-Velsky and Landis

- AVL tree is a type of self-and-height-balanced binary search tree
    
    > Mathematically, the longest path of height-balanced tree has been shown to be, at worst, 44% longer than `logn`

- Each node in an AVL tree has a balance factor, which is the difference in height between its left and right subtrees.
    - balanceFactor(N) = height(N.right) - height(N.left)
    - Heft-heavy: balanceFactor < 0
    - Right-heavy: balanceFactor > 0
    - Height balanced: all balance factors are -1, 0, 1

- `NULL` child is height -1
- A node is unbalanced when the absolute height difference between the left and right subtrees is greater than one

#### Time Complexity

- Rotation: `O(1)`
- Each `rebalance`: max two rotations =>`O(1)`
- Rebalance: can be called at most `O(log(n))` times => insert, delete `O(log(n))`
- Also search is `O(log(n))`