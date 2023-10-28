// TODO: Finish writing test.

import { assert, assertInstanceOf, assertStrictEquals,
equal } from "https://deno.land/std@0.204.0/assert/mod.ts";
import * as asserts from 'std/testing/asserts.ts'

import { logStr, logWithFunc, getPropNames, getPropSymbols,
listFilesSync } from "./printStuffToStdout.ts";

import * as log from 'std/log/mod.ts'

if (import.meta.main) {
    const l = console.log
    l(log)
}