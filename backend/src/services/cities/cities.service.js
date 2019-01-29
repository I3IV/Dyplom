// Initializes the `Cities` service on path `/cities`
const createService = require("feathers-sequelize");
const createModel = require("../../models/cities.model");
const hooks = require("./cities.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/cities", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("cities");

  service.hooks(hooks);
};
