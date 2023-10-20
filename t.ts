//import { Record } from "https://deno.land/x/immutable@4.0.0-rc.14-deno/mod.ts";

interface User {
    id: number,
    name: string
}

declare interface MyOptions



const getImpM = (options: object) => {
    if (options) {
        console.debug(`options: ${options}`)
    }
    console.log(import.meta)
}