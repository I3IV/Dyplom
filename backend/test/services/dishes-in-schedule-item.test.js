const assert = require("assert");
const app = require("../../src/app");

describe("'DishesInScheduleItem' service", () => {
  it("registered the service", () => {
    const service = app.service("dishes-in-schedule-item");

    assert.ok(service, "Registered the service");
  });
});
