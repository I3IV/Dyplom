const assert = require("assert");
const app = require("../../src/app");

describe("'MenuCategories' service", () => {
  it("registered the service", () => {
    const service = app.service("menu-categories");

    assert.ok(service, "Registered the service");
  });
});
