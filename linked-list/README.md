# Linked list

## Related Algorithms

- [Floyd's algorithm (tortoise and hare)](https://github.com/chengr4/my-algorithms/tree/main/others#floyds-tortoise--hare): Check cycle

## Cheet sheet

Reverse list:

```javascript
// JavaScript

// iterative
// O(n), O(1)
var reverseList = function (head) {
  if (head === null) return null;
  let pre = null;
  let curr = head;
  let tempNode = null;

  while (curr) {
    // save into temp node for next loop in advance
    tempNode = curr.next
    // make current pointer direct to reverse direction
    curr.next = pre;
    // move pre to curr
    pre = curr;

    // move to next node
    curr = tempNode;
  }
```

Find the middle node:

```javascript
// Javascript

function findMiddle(head) {
  let slow = head
  let fast = head.next;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
}
```

## Q/A 

W: When to sort Linked List?

eg. Linux Command `htop`

> 衍生問題: merge sort (stable) vs quick sort (unstable) (??)

## References

1. [你所不知道的 C 語言: linked list 和非連續記憶體](https://hackmd.io/@sysprog/c-linked-list?fbclid=IwAR2wDVZx60cvbj9O1hrOEm1UfljFvetw5CgFNfsxrx07fJRrajaUhJb2Gkw)
