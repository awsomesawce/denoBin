import * as con from 'std/console/mod.ts';
import * as path from 'https://deno.land/std@0.204.0/path/mod.ts';
import * as asserts from 'std/testing/asserts.ts'
import { existsSync } from 'fs'
import _ from 'lodash'

const l = console.log

export function getPropNames(thing:any): string[] {
    return Object.getOwnPropertyNames(thing)
}

export function getPropSymbols(thing:any): symbol[] {
    return Object.getOwnPropertySymbols(thing)
}

export type ListFilesReturnType = string | Deno.DirEntry[]

export interface ListFilesOptions {
    /** Set if you just want the name and not a DirEntry object */
    justNames?: boolean | undefined,
    returnType?: ListFilesReturnType,

    /** uses `.join(", ")` to join the retval into a comma-separated string. */
    joinArray?: boolean | undefined
}


/** Simply print the files to stdout using `console.log()` */
// Changed name to listFilesSync from listFiles in accordance with Deno.
export function listFilesSync (p: string = '.', options: ListFilesOptions = {justNames: false}, verbose: boolean = false): void {
    const rv = []
    if (verbose) {
        console.debug("Listing files from %s", p)
    }
    if (!existsSync(p)) {
        throw new Error(`Path ${p} does not exist`)
    }
    if (options.justNames) {
        for (const i of Deno.readDirSync(p)) {
            rv.push(i.name)
        }
        
    } else {
        for (const i of Deno.readDirSync(p)) rv.push(i)
    }
options.joinArray 
    ? console.log(rv.join(", "))
    : console.log(rv)
}

/** Log the thing using the `toString()` method. */
export const logStr = (thing: any): void => {
    //if (Reflect.has())
    console.log(thing.toString())
}

export const logWithFunc = (thing:any, func:any) => {
    return console.log(func(thing))
}



if (import.meta.main) {
    l(con)
    l(console)
}