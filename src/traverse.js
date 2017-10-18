// @flow
import type { ASTNode, Visitor } from './types';
import Path from './path';

export default function traverse<Context: {}>(
  path: Path,
  visitor: Visitor<Context>,
  context: Context,
): Context {
  // ...
  return context;
}
