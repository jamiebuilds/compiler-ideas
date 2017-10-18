// @flow
import type { ASTNode } from './types';
import { CompilerError } from './errors';
import messages from './messages';

type Matcher<Result> = {
  [key: string]: () => Result,
};

export default function match<Result>(nodeType: string, matcher: Matcher<Result>): Result {
  let method;

  if (typeof matcher[nodeType] === 'function') {
    method = matcher[nodeType];
  } else if (matcher.else) {
    method = matcher.else;
  } else {
    throw new CompilerError(messages.missingMatchMethod(nodeType));
  }

  return method();
}
