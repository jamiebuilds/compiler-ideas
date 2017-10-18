// @flow
import type { ASTNode } from './types';
import Path from './path';

export default function traverse<Context: {}>(
  ast: ASTNode,
  traverser: (path: Path, context: Context) => mixed,
  context: Context,
): Context {
  // ...
  return context;
}
