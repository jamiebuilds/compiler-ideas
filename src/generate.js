// @flow
import type { ASTNode, GeneratorOptions } from './types';

export default function generate(
  ast: ASTNode,
  opts: GeneratorOptions,
): { code: string, map: string } {
  // ...
  return { code: '', map: '' };
}
