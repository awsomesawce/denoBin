// Get various things from objects

/**
 * Get keys of object
 * @param o object
 * @returns string[]
 */
export function getKeys (o: object): string[] {
    return Object.keys(o)
}

if (import.meta.main) {
    console.log(getKeys(Deno))
}