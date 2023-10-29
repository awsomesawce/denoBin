import * as fs from "std/fs/mod.ts";
import {} from "std/path/mod.ts";

export type ListDirsOptions = {
  justNames?: boolean;
  _verbose?: boolean;
};

/** List directories inside the path provided
 * @param {string} pth 
 */
export async function listDirs(
  pth: string | URL,
  options: ListDirsOptions,
): Promise<Deno.DirEntry[]> {
  const rv: Deno.DirEntry[] = [];
  const { readDir } = Deno;
  const vb: boolean = options._verbose ? true : false
  if (vb) {
    console.log(`Listing dirs from path: ${pth}`);
  }
  for await (const f of readDir(pth)) {
    if (f.isDirectory) {
      rv.push(f);
    }
  }
  return rv;
}

/** returns an array of all directories within the directory given */
export function listDirsSync (pth: string): Deno.DirEntry[] {
    const rv = []
    for (const item of Deno.readDirSync(pth)) {
        if (item.isDirectory) {
            rv.push(item)
        }
    }
    return rv
}

if (import.meta.main) {
  console.log("This is %s", import.meta.url);
  await listDirs(".", {_verbose: true})
}
