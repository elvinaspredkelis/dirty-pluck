import { test } from "uvu";
import * as assert from "uvu/assert";
import { pluck } from "../index.js";

// Pluckable object
const OBJECT = {
  id: "request_123",
  endpoint: "https://api.example.com/companies",
  scopes: ["default", "owner"],
  count: 3,
  agent: {
    token: "token",
    roles: ["admin", "developer"],
  },
  data: [
    {
      id: "item_abc",
      slug: "apple",
      name: "Apple",
      url: "https://apple.com",
      owner: {
        username: "steve",
        first_name: "Steve",
        last_name: "Jobs",
      },
    },
    {
      id: "item_bcd",
      slug: "microsoft",
      name: "Microsoft",
      url: "https://microsoft.com",
      owner: {
        username: "bill",
        first_name: "Bill",
        last_name: "Gates",
      },
    },
    {
      id: "item_cde",
      slug: "mintis",
      name: "Mintis",
      url: "https://mintis.app",
      owner: {
        username: "elvinas",
        first_name: "Elvinas",
        last_name: "Predkelis",
      },
    },
  ],
};

// Basic tests
test("pluck string", () => {
  const result = pluck(OBJECT, "id");

  assert.instance(result, Array);
  assert.equal(result, ["request_123"]);
});

test("pluck array", () => {
  const result = pluck(OBJECT, "scopes");

  assert.instance(result, Array);
  assert.equal(result, ["default", "owner"]);
});

test("pluck object", () => {
  const result = pluck(OBJECT, "agent");

  assert.instance(result, Array);
  assert.equal(result, [
    {
      token: "token",
      roles: ["admin", "developer"],
    },
  ]);
});

// Nested object tests
test("pluck nested string", () => {
  const result = pluck(OBJECT, "agent.token");

  assert.instance(result, Array);
  assert.equal(result, ["token"]);
});

test("pluck nested array", () => {
  const result = pluck(OBJECT, "agent.roles");

  assert.instance(result, Array);
  assert.equal(result, ["admin", "developer"]);
});

test("pluck deeply nested objects", () => {
  const result = pluck(OBJECT, "data.owner");

  assert.instance(result, Array);
  assert.equal(result, [
    {
      username: "steve",
      first_name: "Steve",
      last_name: "Jobs",
    },
    {
      username: "bill",
      first_name: "Bill",
      last_name: "Gates",
    },
    {
      username: "elvinas",
      first_name: "Elvinas",
      last_name: "Predkelis",
    },
  ]);
});

test("return same object in array if empty expression", () => {
  const object = { foo: "bar" };
  const result = pluck(object, "");

  assert.instance(result, Array);
  assert.equal(result, [object]);
});

test("return same array if empty expression", () => {
  const array = [{ foo: "bar" }, { foo: "bar" }, { foo: "bar" }];
  const result = pluck(array, "");

  assert.instance(result, Array);
  assert.equal(result, array);
});

// Chained item tests
test("pluck chained", () => {
  const items = pluck(OBJECT, "data");
  const result = pluck(items, "slug");

  assert.instance(result, Array);
  assert.equal(result, ["apple", "microsoft", "mintis"]);
});

test.run();
