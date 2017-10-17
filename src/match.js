// @flow
import type { ASTNode } from './types';

type Matcher<Result> = {
  [key: string]: () => Result,
};

export default function match<Result>(node: ASTNode, matcher: Matcher<Result>): Result | null {
  let method = matcher[node.type] || matcher.else;
  if (typeof method === 'function') {
    return method();
  } else {
    return null;
  }
}
