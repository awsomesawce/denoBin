import { assertEquals, assert } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { getKeys } from "./get.ts";

const testData = {
    a: 1,
    b: 2
}

Deno.test(function getKeysTest() {
    assertEquals(getKeys(testData),
    ['a', 'b']);
  });