# Compiler API Playground

See examples in `examples/`.

## Core Principles

- Immutable
- Async
- Performant
- Deterministic
- Composable
- Extendable
- Strongly Typed
- Cleaner Primitives

## Ideas

- No visitors, rely on pattern matching.
- No visiting on node "exit".
- Functional/Immutable transforms
  - No path manipulation APIs, return transformations.
    - No change: `return path`
    - Remove: `return null`
    - Replace: `return node`
- Explicit Scope API
  - Only create scopes when needed.
  - Cache results based on immutable AST.
- Multiple warnings and errors
  - Warnings generate output but fail
  - Errors fail without generating output
- ESTree-compatible parser agnostic
- Better/Faster code generation

```js
// compiler-config.js
import { transform, merge } from '@compiler/core';
import flow from '@compiler/flow';
import react from '@compiler/react';
import classProperties from '@compiler/class-properties';
import pipelineOperator from '@compiler/pipeline-operator'

const transformer = merge(
  flow,
  react,
  classProperties,
  pipelineOperator,
);

export default (path, context) => {
  return transform(path, transformer, context);
};
```

## API

# `reduce()`


# `traverse()`


# `transform()`
