// @flow
export default class Stack<T> {
  items: Array<T>;

  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop(): T {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }
}
