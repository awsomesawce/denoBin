import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as I from 'https://deno.land/x/immutable/mod.ts'
import * as L from 'https://deno.land/x/lodash_es/mod.ts'

import * as path from 'https://deno.land/std/path/mod.ts'

import * as jsonc from 'https://deno.land/std/jsonc/mod.ts'
import * as json from 'https://deno.land/std/json/mod.ts'
import { chunk } from 'https://deno.land/std/collections/chunk.ts'
import { encodeBase64 } from 'https://deno.land/std/encoding/base64.ts'
import { encodeHex } from 'https://deno.land/std/encoding/hex.ts'

import { assertEquals } from "https://deno.land/std/assert/assert_equals.ts";

export const clog = console.log 

/** Simply an alias for Object.keys */
function getKeys (obj:object) {
    return Object.keys(obj)
}

const rv = {}

/** main entry point for script */
function main() {
    console.log(getKeys(json))
    const s = chunk.toString()
    const encodedB64 = encodeBase64(s)
    const encodedHex = encodeHex(s)
    rv.encoded = encodeBase64
    
}

main()