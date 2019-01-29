const assert = require("assert");
const feathers = require("@feathersjs/feathers");
const populateCategories = require("../../src/hooks/populate-categories");

describe("'populate-categories' hook", () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use("/dummy", {
      async get(id) {
        return { id };
      }
    });

    app.service("dummy").hooks({
      before: populateCategories()
    });
  });

  it("runs the hook", async () => {
    const result = await app.service("dummy").get("test");

    assert.deepEqual(result, { id: "test" });
  });
});
