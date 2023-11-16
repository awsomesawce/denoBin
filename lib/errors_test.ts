import * as ddeps from "../dev_deps.ts";
import { NotImplementedError } from "./errors.ts";

const { assert, assertEquals, assertInstanceOf, assertIsError } = ddeps;

//console.log(ddeps)
Deno.test({
    name: "Test if is an error",
    fn() {
        const err =  new NotImplementedError()
        assertEquals(err, new NotImplementedError())
    }
})

if (import.meta.main) {
    console.log(ddeps)
}