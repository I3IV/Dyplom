const assert = require("assert");
const app = require("../../src/app");

describe("'AdditionalProductsForItem' service", () => {
  it("registered the service", () => {
    const service = app.service("additional-products-for-item");

    assert.ok(service, "Registered the service");
  });
});
