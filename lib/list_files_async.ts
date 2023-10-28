import { fromFileUrl, join, resolve, parse, joinGlobs, dirname } from "std/path/mod.ts";
const FNAME = fromFileUrl(import.meta.url)
const DIRNAME = dirname(FNAME)

/** List files asynchronously.
 * @todo Rename listFilesAsync to listFiles
 * @param {string} pth 
 */
export const listFiles = async (pth: string): Promise<void> => {
    for await (const item of Deno.readDir(pth))
        console.log(item)
}

if (import.meta.main) {
    
    listFilesAsync(DIRNAME)
    console.log(Deno.args)
}