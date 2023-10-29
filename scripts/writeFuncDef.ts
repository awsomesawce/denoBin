import { ensureFile, ensureFileSync } from "https://deno.land/std@0.204.0/fs/ensure_file.ts"
import { fromFileUrl, resolve, join, globToRegExp, parse } from "std/path/mod.ts"
import { types, parseArgs, inspect, format as _format, formatWithOptions, debuglog } from "node:util";
import * as nodeUtil from "node:util";


const defOne = File.toString()
const defTwo = Deno.FsFile.toString()

/** Return the thing as a string */
const toString = (thing: any): string => {
    // TODO: Test whether object has a toString method
    //return thing.toString()
    return `${thing}` // Implicit conversion to string
}

export async function appendDefinition (pth: string, clsOrFunc: unknown): void {

}
/** Write a function definition or class definition to a file */
export const writeFunctionDef = async (pth: string, func: object | undefined, verbose = true) => {
    //if (!Object.hasOwn(func, "toString")) throw new Error("toString method not found")
    if (verbose) console.debug(`Writing to ${pth}`)
    await Deno.writeTextFile(pth, func.toString())
}

if (import.meta.main) {
    const l = console.log;
    const TESTDIR = fromFileUrl(import.meta.resolve("../testdir"))
    await writeFunctionDef(`${TESTDIR}\\deno_command.ts`, Deno.Command)
    //await Deno.writeTextFile("../testdir/File.ts", defOne, {create:true});
    //Deno.writeTextFileSync("../testdir/DenoFsFile.ts", defTwo, {createNew:true})
}