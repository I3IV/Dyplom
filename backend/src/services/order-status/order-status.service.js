// Initializes the `OrderStatus` service on path `/order-status`
const createService = require('feathers-sequelize');
const createModel = require('../../models/order-status.model');
const hooks = require('./order-status.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/order-status', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('order-status');

  service.hooks(hooks);
};
