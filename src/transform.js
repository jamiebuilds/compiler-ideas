// @flow
import type { ASTNode, Visitor } from './types';
import Path from './path';

export default async function transform<Context: {}>(
  path: Path,
  visitor: Visitor<Context>,
  context: Context,
) {
  let transformed = path;

  // ...

  return transformed.node;
}
