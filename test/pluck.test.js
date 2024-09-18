import { test } from "uvu";
import * as assert from "uvu/assert";
import { pluck } from "../index.js";

// Dummy pluckable object
const OBJECT = {
  string: "value",
  array: [1, 2, 3, 4, 5],
  nested: {
    string: "value",
    array: [1, 2, 3, 4, 5],
    object_array: [
      {
        number: 1,
        nested: {
          object_array: [{ string: "value", number: 1 }],
        },
      },
      {
        number: 2,
        nested: {
          object_array: [{ string: "value", number: 2 }],
        },
      },
      {
        number: 3,
        nested: {
          object_array: [{ string: "value", number: 3 }],
        },
      },
    ],
  },
};

// Basic tests
test("pluck string", () => {
  const result = pluck(OBJECT, "string");

  assert.instance(result, Array);
  assert.equal(result, ["value"]);
});

test("pluck array", () => {
  const result = pluck(OBJECT, "array");

  assert.instance(result, Array);
  assert.equal(result, [1, 2, 3, 4, 5]);
});

// Nested object tests
test("pluck nested string", () => {
  const result = pluck(OBJECT, "nested.string");

  assert.instance(result, Array);
  assert.equal(result, ["value"]);
});

test("pluck nested array number", () => {
  const result = pluck(OBJECT, "nested.object_array.number");

  assert.instance(result, Array);
  assert.equal(result, [1, 2, 3]);
});

test("pluck deeply nested objects", () => {
  const result = pluck(OBJECT, "nested.object_array.nested.object_array");

  assert.instance(result, Array);
  assert.equal(result, [
    { string: "value", number: 1 },
    { string: "value", number: 2 },
    { string: "value", number: 3 },
  ]);
});

test.run();
