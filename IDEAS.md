# Ideas for Filesystem Manipulation in Deno/Typescript

Here is where I will brainstorm ideas for writing a deno/typescript module that proves useful.

## Path Manip

- Write a `cygpath`-like library.
`cygpath` is a utility for Windows that allows for converting Windows paths into unix paths and
vice-versa.
  - Write a function that replaces windows-like path separaters into unix-like ones.


## Challenges

- _Typescript_
Typescript has a whole load of keywords that I need to get accustomed to.
  - Difference between `declare interface` and `export interface`
  - When do I need a `.d.ts` declaration file?  Only when typing javascript?
  - When to use `interface`, `type`, or `declare`.