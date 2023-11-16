// Development dependencies all rolled into one!

export {
    assert,
    assertEquals,
    assertInstanceOf,
    assertIsError,
    unimplemented,
    equal,
    fail,
    assertExists,
    assertAlmostEquals
} from "https://deno.land/std@0.206.0/assert/mod.ts";


export * as path from "$std/path/mod.ts"
export * as nodePath from "node:path"
export * as JSON5 from "json5"

// Check https://github.com/denoland/deno_std/blob/main/testing/sinon_example.ts
export * as sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
export * as chai from "https://cdn.skypack.dev/chai@4.3.4?dts";