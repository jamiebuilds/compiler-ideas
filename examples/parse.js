// @flow
import { parse, type ASTNode } from '../src/index';

export default function parseCode(code: string): ASTNode {
  return parse(code, {
    // ...
  });
}
