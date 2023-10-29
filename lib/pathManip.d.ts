//declare namespace PathManip {}

declare type CygpathResultType = "windows" | "unix" | "mixed"

declare interface CygpathOptions {
    // Which type of path to be returned.
    resultType?: CygpathResultType
}

/** A `cygpath`-like utility script in typescript. */
declare function cygpathSync (pth: string): string