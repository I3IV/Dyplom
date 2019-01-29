const assert = require("assert");
const app = require("../../src/app");

describe("'Countries' service", () => {
  it("registered the service", () => {
    const service = app.service("countries");

    assert.ok(service, "Registered the service");
  });
});
