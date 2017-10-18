// @flow
import type { ASTNode } from './types';
import Path from './Path';
import Binding from './Binding';
import traverse from './traverse';

type CacheEntry = {
  // These are additional bindings found within a path that need to be added to
  // the list of other bindings.
  bindings: Array<{ name: string, binding: Binding }>,
  // These are additional references found within a path that need to be merged
  // back into the appropriate bindings.
  references: Array<{ name: string, path: Path }>,
};

const cache: WeakMap<ASTNode, CacheEntry> = new WeakMap();

// This function will traverse through a scope finding every binding and
// reference. Caching parts of the (immutable) AST so that it doesn't
function collectBindings(path): Array<Binding> {
  return [];
}

export default class Scope {
  path: Path;
  bindings: Array<Binding>;

  constructor(path: Path) {
    this.path = path;
    this.bindings = collectBindings(path);
  }

  static getClosestScopePath(path: Path): Path {
    return path;
  }

  static getParentScopePath(path: Path): Path {
    return path;
  }

  static isScopePath(path: Path): boolean {
    return true;
  }
}
