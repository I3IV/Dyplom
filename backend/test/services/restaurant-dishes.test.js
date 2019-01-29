const assert = require("assert");
const app = require("../../src/app");

describe("'RestaurantDishes' service", () => {
  it("registered the service", () => {
    const service = app.service("restaurant-dishes");

    assert.ok(service, "Registered the service");
  });
});
