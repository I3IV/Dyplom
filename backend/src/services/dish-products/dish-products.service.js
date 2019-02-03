// Initializes the `DishProducts` service on path `/dish-products`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dish-products.model');
const hooks = require('./dish-products.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dish-products', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('dish-products');

  service.hooks(hooks);
};
