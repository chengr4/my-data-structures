// parent index: (index-1)/2
// left child index: 2*index+1
// right child index: 2*index+2

class MinHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  getParentIndex(index) {
    return Math.trunc((index - 1 / 2));
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hastLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  getParentValue(index) {
    return this.storage[this.getParentIndex(index)];
  }

  getLeftChildValue(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }

  getRightChildValue(index) {
    return this.storage[this.getRightChildIndex(index)];
  }

  swapElement(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  insert(value) {
    // put element at Complete BT's latest position
    this.storage[this.size] = value;
    this.size++;
    // ensure the element at the correct position
    this.heapfiyUp();
  }

  // for insert
  heapfiyUp() {
    let currentIndex = this.size - 1;
    while (this.hasParent(currentIndex) && this.getParentValue(currentIndex) > this.storage[currentIndex]) {
      this.swapElement(this.getParentIndex, currentIndex);
      // move pointer to its parent
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  remove() {
    if (this.size === 0) throw new Error("Empty Heap");
    // take out the element at the top
    let data = this.storage[0];
    // Move the latest inserted element to the top
    this.storage[0] = this.storage[this.size - 1];
    this.size--;

    this.heapfiyDown();

    return data
  }

  // Compare from top to bottom, if conflicting, swap (swap with the smallest one)
  heapfiyDown() {
    // start at the root
    let currentIndex = 0;

    // we only need to track left child because it it does not have a left child, it will not have a right child
    while (this.hastLeftChild(currentIndex) && this.getParentValue(currentIndex) > this.storage[currentIndex]) {
      let smallerChildIndex =
        this.hasRightChild(currentIndex) && this.getRightChildValue(currentIndex) < this.getLeftChildValue(currentIndex)
          ? this.getRightChildIndex(currentIndex) : this.getLeftChildIndex(currentIndex);

      if (this.storage[currentIndex] < this.storage[smallerChildIndex]) {
        // all good
        return;
      } else {
        this.swapElement(currentIndex, smallerChildIndex);
      }
      // move pointer to its child
      currentIndex = smallerChildIndex;
    }
  }

}