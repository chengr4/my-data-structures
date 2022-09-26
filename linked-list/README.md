# Linked list


## Cheet sheet

reverse list

```javascript
// iterative
// O(n), O(1)
var reverseList = function (head) {
  if (head === null) return null;
  let pre = null;
  let curr = head;
  let nextNode = null;

  while (curr) {
    // save into temp node for next loop in advance
    nextNode = curr.next
    // make current pointer direct to reverse direction
    curr.next = pre;
    // move pre to curr
    pre = curr;

    // move to next node
    curr = nextNode;
  }
```

## References

1. [你所不知道的 C 語言: linked list 和非連續記憶體](https://hackmd.io/@sysprog/c-linked-list?fbclid=IwAR2wDVZx60cvbj9O1hrOEm1UfljFvetw5CgFNfsxrx07fJRrajaUhJb2Gkw)
