// Initializes the `Menu` service on path `/menu`
const createService = require("feathers-sequelize");
const createModel = require("../../models/menu.model");
const hooks = require("./menu.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/menu", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("menu");

  service.hooks(hooks);
};
