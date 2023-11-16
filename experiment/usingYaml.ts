import { stringify as stringifyYaml, parse as parseYaml } from "std/yaml/mod.ts";
import {resolve, fromFileUrl, dirname} from "std/path/mod.ts";

const FILE = fromFileUrl(import.meta.resolve("../.vscode/settings.json"))
const THISDIR = dirname(FILE)

const data = JSON.parse(Deno.readTextFileSync(FILE))
const ystr = stringifyYaml(data)

const l = console.log
l(FILE)
l(data)
l(ystr)

//l(THISDIR)