// @flow
import type { ASTNode } from './types';

type Matcher<Result> = {
  [key: string]: () => Result,
};

export default function match<Result>(nodeType: string, matcher: Matcher<Result>): Result {
  if (!matcher.else) {
    throw new Error('Missing else() for matcher');
  }
  let method = typeof matcher[nodeType] === 'function' ? matcher[nodeType] : matcher.else;
  return method();
}
