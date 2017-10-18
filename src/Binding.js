// @flow
import Path from './path';

/**
 * Bindings belong to a scope, but contain references in any nested scope.
 *
 * These should be considered immutable. Once you go and modify paths within
 * the AST, you'll have to recalculate scope. To fix performance, the parent
 * Scope object caches results from previous revisions of the AST.
 */
export default class Binding {
  path: Path;
  references: Array<Path>;

  constructor(path: Path, references: Array<Path>) {
    this.path = path;
    this.references = references;
  }
}
