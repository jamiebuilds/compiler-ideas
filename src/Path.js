// @flow
import type { ASTNode } from './types';

export default class Path {
  node: ASTNode | Array<ASTNode>;
  parent: Path | null;
  key: string | number | null;

  constructor(node: ASTNode, parent: Path | null, key: string | number | null) {
    this.node = node;
    this.parent = parent;
    this.key = key;
  }

  get(key: string) {
    return new Path(this.node[key], this, key);
  }
}
