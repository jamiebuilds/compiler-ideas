// @flow
import { generate, type ASTNode } from '../src/index';

export default function printAST(ast: ASTNode): string {
  return generate(ast, {
    // ...
  }).code;
}
