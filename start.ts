import { ensureDir, ensureDirSync } from "https://deno.land/std@0.187.0/fs/ensure_dir.ts";
import { join } from "https://deno.land/std/path/join.ts";
import * as fs from 'file:///C:/Users/Carl/Downloads/deno_std/fs/mod.ts'
import * as path from "https://deno.land/std/path/mod.ts"
import * as color from 'https://deno.land/std/fmt/colors.ts'
import * as io from 'https://deno.land/std/io/mod.ts'
import { assert } from "../Downloads/deno_std/assert/assert.ts";


export const dlFolder: string = path.resolve('~/Downloads')

export const stdLocal = await fs.exists('file:///C:/Users/Carl/Downloads/deno_std')
    ? fs.walkSync('~/Downloads/deno_std')
    : console.error('Directory does not exist.')


function useIo() {
    console.warn('most');
    
}

const t = () => {

}