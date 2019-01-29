// Initializes the `DishSizes` service on path `/dish-sizes`
const createService = require("feathers-sequelize");
const createModel = require("../../models/dish-sizes.model");
const hooks = require("./dish-sizes.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/dish-sizes", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("dish-sizes");

  service.hooks(hooks);
};
