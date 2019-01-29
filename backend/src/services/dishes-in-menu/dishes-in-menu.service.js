// Initializes the `DishesInMenu` service on path `/dishes-in-menu`
const createService = require("feathers-sequelize");
const createModel = require("../../models/dishes-in-menu.model");
const hooks = require("./dishes-in-menu.hooks");

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get("paginate");

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use("/dishes-in-menu", createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service("dishes-in-menu");

  service.hooks(hooks);
};
