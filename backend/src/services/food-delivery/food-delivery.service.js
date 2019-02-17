// Initializes the `FoodDelivery` service on path `/food-delivery`
const createService = require('feathers-sequelize');
const createModel = require('../../models/food-delivery.model');
const hooks = require('./food-delivery.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/food-delivery', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('food-delivery');

  service.hooks(hooks);
};
