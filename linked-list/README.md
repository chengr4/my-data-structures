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