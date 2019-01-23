// Initializes the `AdditionalProductsForItem` service on path `/additional-products-for-item`
const createService = require('feathers-sequelize');
const createModel = require('../../models/additional-products-for-item.model');
const hooks = require('./additional-products-for-item.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/additional-products-for-item', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('additional-products-for-item');

  service.hooks(hooks);
};
