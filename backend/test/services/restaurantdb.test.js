const assert = require("assert");
const app = require("../../src/app");

describe("'restaurantdb' service", () => {
  it("registered the service", () => {
    const service = app.service("restaurantdb");

    assert.ok(service, "Registered the service");
  });
});
