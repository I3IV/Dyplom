// Initializes the `AdditionalProductsForOrder` service on path `/additional-products-for-order`
const createService = require('feathers-sequelize');
const createModel = require('../../models/additional-products-for-order.model');
const hooks = require('./additional-products-for-order.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/additional-products-for-order', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('additional-products-for-order');

  service.hooks(hooks);
};
