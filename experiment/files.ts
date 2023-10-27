import { assertEquals } from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import * as io from 'https://deno.land/std@0.204.0/io/mod.ts'
import * as fs from "std/fs/mod.ts"
import * as nodePath from "node:path"
//import * as path from "path"
import { parse as jsoncParse } from "file:///C:/Users/Carl/Downloads/deno_std/jsonc/mod.ts"
import { fromFileUrl, dirname, join } from "std/path/mod.ts";

/** Prints contents of dir */
export async function printDir (p: string = '.') {
    for await (const f of Deno.readDir(p)) console.log(f)
}


export async function readJsonc (p: string) {
    const content = await Deno.readTextFile(p)
    const rv = jsoncParse(content)
    return rv
}

if (import.meta.main) {
    const l = console.log
    const dir = dirname(fromFileUrl(import.meta.url))
    const fname = join(dir, "files.jsonc")
    l(`directory = ${dir}`)

    
    const o = await readJsonc(fname)
    l(o)
}