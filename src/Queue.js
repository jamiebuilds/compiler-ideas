// @flow
export default class Queue<T> {
  items: Array<T>;

  constructor() {
    this.items = [];
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T {
    return this.items.shift();
  }

  peek(): T {
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }
}
