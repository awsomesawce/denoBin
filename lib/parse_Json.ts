import * as jsonc from 'std/jsonc/mod.ts'
import * as path from 'std/path/mod.ts'

const DIRNAME = path.dirname(path.fromFileUrl(import.meta.url))
const FILE = path.resolve("../ignore/scoop_list.jsonc")

const parseJson = JSON.parse

/** Get keys of obj using Reflect */
function getKeys(obj:object) {
    return Reflect.ownKeys(obj)
}

/** Prints keys to stdout */
export const printKeys = (o: object): void => {
    console.log(getKeys(o))
}

const doWork = () => {
    const content = Deno.readTextFileSync(FILE)
    const obj = jsonc.parse(content, {allowTrailingComma:true})
    return obj;
}

if (import.meta.main) {
    const print = console.log
    const obj = doWork()
    print(obj)
}