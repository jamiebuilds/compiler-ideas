// @flow
import type { ASTNode } from './types';
import Path from './path';
import Stack from './stack';
import Queue from './queue';

export default function traverse<Context: {}>(
  ast: ASTNode,
  traverser: (path: Path, context: Context) => mixed,
  context: Context,
): Context {
  let stack: Stack<Queue<Path>> = new Stack();
  let queue: Queue<Path> = new Queue();
  let path: Path = new Path(ast, null, null);

  queue.enqueue(path);
  stack.push(queue);

  while (stack.size() > 0) {
    let queue = stack.pop();

    while (queue.size() > 0) {
      let path = queue.dequeue();

      // ...
    }
  }

  return context;
}
