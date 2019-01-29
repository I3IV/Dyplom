// Initializes the `ItemStatus` service on path `/item-status`
const createService = require("feathers-sequelize");
const createModel = require("../../models/item-status.model");
const hooks = require("./item-status.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/item-status", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("item-status");

  service.hooks(hooks);
};
