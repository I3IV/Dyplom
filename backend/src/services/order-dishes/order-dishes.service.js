// Initializes the `OrderDishes` service on path `/order-dishes`
const createService = require('feathers-sequelize');
const createModel = require('../../models/order-dishes.model');
const hooks = require('./order-dishes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/order-dishes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('order-dishes');

  service.hooks(hooks);
};
