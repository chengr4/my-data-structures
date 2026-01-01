# Heap

- 概念用 tree 表示 (Complete BT) => 實際用 array
- 屬 Complete BT

> Complete BT: 由上至下，由左至右編號的樹，並且，除了最後一層，所有層都必須填滿

- Delete 從 root 開始 => 刪除從根開始雖然很快，但是要調整其他 node 的位置，所以時間複雜度為 O(log(n))
- Parent node must always be more/less than child => if conflicting, swap
- Every insert, delete should check

> percolating up/down: 重新調整 heap 的結構

```
parent index: floor((index-1)/2)
left child index: 2 * index+1
right child index: 2 * index+2
```

## Advantage

- Great find the most frequent element

## Time Complexity

| Operation | time |
| --------- | ---- |
| Insertion | avg. `O(log(n))` |
| Deletion | avg. `O(log(n))` |
| Searching | avg. `O(n)` |

## Deletion

- `O(log(n))`

Flow:

Delete element from **min** heap eg.

1. Remove the element at the top
2. Move the latest inserted element to the top
3. Campare with the smallest child, if conflicting, swap (swap with the smallest one)
4. Compare from top to bottom, if conflicting, swap (swap with the smallest one)

> for step 3, the reason is the smallest child should go to the top.

## Heap sort



## Heapify

Heapify 是將一個未滿足堆積性質（heap property）的資料結構轉換成堆積的一個過程。這是堆積（heap）操作中的關鍵步驟，特別是在建構和維護堆積時用來確保其結構性質。

把 arbitrary array 轉換成 Heap: O(n)

In general, n/2^(i+1) nodes have height i =>

The total worl is n/2 * 0 + n/4 * 1 + n/8 * 2 + ... + n/n * (log n - 1) = n * (0 + 1/4 + 2/8 + 3/16 + ... + h/2^(h+1)) = n


### Divide and Conquer (Top Down)

Divide-n-conquer, in a post-order traversal:

1. heapify left subtree
2. heapify right subtree
3. now both left and right subtrees are heaps, but the root might still cause a violation; if so, keep bubbling down until it fits

```python
def heapify(heap, i=0):
    if 2*i+1 >= n: # leaf node?
        return 
    heapify(heap, 2*i+1) # heapify left tree
    heapify(heap, 2*i+2) # heapify right tree
    bubbledown(heap, i) # adjust root
```

$$T(n) = 2T(n/2)+O(log n)$$

### Bottom Up



## Priority Queue

- An ADT
- 通常用 Heap 實現

see [pq.md](../pq.md)

## References

1. [Binary Heaps (Min/Max Heaps) in JavaScript For Beginners An Implementation of a Priority Queue; (2021.2)](https://youtu.be/ifNlv0N5wT8)
