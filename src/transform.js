// @flow
import type { ASTNode } from './types';
import Path from './path';
import Stack from './stack';
import Queue from './queue';

export default async function transform<Context: {}>(
  ast: ASTNode,
  transformer: (
    path: Path,
    context: Context,
  ) => Path | ASTNode | null,
  context: Context,
) {
  let stack: Stack<Queue<Path>> = new Stack();
  let queue: Queue<Path> = new Queue();
  let path: Path = new Path(ast, null, null);

  queue.enqueue(path);
  stack.push(queue);

  let transformed = ast;

  while (stack.size() > 0) {
    let queue: Queue<Path> = stack.pop();

    while (queue.size() > 0) {
      let path = queue.dequeue();

      // ...
    }
  }

  return transformed;
}
