// @flow
export default class Queue<T> {
  items: Array<T>;

  constructor() {
    this.items = [];
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }
}
