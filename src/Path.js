// @flow
import type { ASTNode } from './types';

export default class Path {
  node: ASTNode;
  parent: Path | null;
  key: string | null;
  index: number | null;

  constructor(
    node: ASTNode,
    parent: Path | null = null,
    key: string | null = null,
    index: number | null = null,
  ) {
    this.node = node;
    this.parent = parent;
    this.key = key;
    this.index = index;
  }

  get(key: string): Path {
    return new Path(this.node[key], this, key);
  }

  getArray(key: string): Array<Path> {
    let value = this.node[key];
    if (Array.isArray(value)) {
      return value.map((val, index) => {
        return new Path(val, this, key, index);
      });
    } else if (value == null) {
      return [];
    } else {
      throw new Error('Called Path#getArray to get a non-array value');
    }
  }
}
