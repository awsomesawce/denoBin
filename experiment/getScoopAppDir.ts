import { listFilesSync } from "../lib/printStuffToStdout.ts";
import { resolve } from "std/path/mod.ts";
import {homedir} from 'node:os'

const HOME = homedir()
const replaceTilde = (pat: string) => {
    return resolve(pat.replace("~", `${HOME}`))
}

const SCOOPAPPS = replaceTilde("~/scoop/apps")

listFilesSync(SCOOPAPPS, {justNames:true})