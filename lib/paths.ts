// path stuff
/*
declare interface MyPath {

}
*/

import { resolve, join, fromFileUrl, globToRegExp, parse } from "https://deno.land/std@0.187.0/path/mod.ts"
import type { ParsedPath } from "std/path/mod.ts"
import { parse as parseJsonc } from "https://deno.land/std@0.204.0/jsonc/mod.ts"
import * as path from 'file:///C:/Users/Carl/Downloads/deno_std/path/mod.ts'
import * as R from 'https://x.nest.land/rimbu@0.13.4/mod.ts'

import { logStr, logWithFunc, listFiles } from "./printStuffToStdout.ts"

export const paths = {
    denoStd: "file:///C:/Users/Carl/Downloads/deno_std/",
    denoStdUrl: "https://deno.land/std@0.204.0",
    rimbu: "https://x.nest.land/rimbu@0.13.4/mod.ts"
}

const DENOJSONC = import.meta.resolve("../deno.jsonc")

if (import.meta.main) {
    const dir = fromFileUrl(paths.denoStd)
    //console.debug(`Listing files from ${dir}`)
    listFiles(dir, {justNames:true}, true)
}