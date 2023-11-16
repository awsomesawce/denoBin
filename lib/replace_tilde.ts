import { homedir } from "node:os";
import { resolve } from "std/path/resolve.ts";

export const HOMEDIR = homedir()

/**
 * Just replace the tilde with the home directory!
 * @param pth path string to replace tilde.
 * @returns path with tilde replaced by the home directory.
 */
export default function replaceTilde (pth: string): string {
    return resolve(pth.replace("~", HOMEDIR))
}