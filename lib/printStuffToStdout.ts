import * as con from 'std/console/mod.ts';
import * as path from 'https://deno.land/std@0.204.0/path/mod.ts';
import * as asserts from 'std/testing/asserts.ts'
import { exists, existsSync } from 'fs'
import _ from 'lodash'

const l = console.log

export function getPropNames(thing:any): string[] {
    return Object.getOwnPropertyNames(thing)
}

export function getPropSymbols(thing:any): symbol[] {
    return Object.getOwnPropertySymbols(thing)
}

interface ListFilesOptions {
    justNames?: boolean
}


/** Simply print the files to stdout using `console.log()` */
export function listFiles (p: string = '.', options: ListFilesOptions = {justNames: false}, verbose: boolean = false): void {
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

    console.log(rv)
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
    logWithFunc(_, Object.keys)
}