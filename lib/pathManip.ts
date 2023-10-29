import * as flags from 'https://deno.land/std@0.204.0/flags/mod.ts';
import * as path from 'std/path/mod.ts';
import * as winPath from 'std/path/windows/mod.ts'
import * as posixPath from "std/path/posix/mod.ts"
import * as os from "node:os"

/** From https://www.typescriptlang.org/docs/handbook/2/functions.html */
type DescribableFunction = {
    desc: string;
    (someArg: number): boolean
}

type CygpathResultType = "windows" | "unix" | "mixed"

export interface CygpathOptions {
    // Which type of path to be returned.
    resultType?: CygpathResultType
}

/** Works just like cygwin's `cygpath` */
export function cygpathSync(pth: string, opts: CygpathOptions): string {
    const resultType: CygpathResultType = opts.resultType ? opts.resultType : "mixed"
    
    let rv: string;
    switch (resultType) {
        case "mixed":

            
            break;
    
        default:
            throw new Error("Unreachable code");
            
            break;
    }
}