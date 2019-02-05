// Initializes the `ProductCategories` service on path `/product-categories`
const createService = require('feathers-sequelize');
const createModel = require('../../models/product-categories.model');
const hooks = require('./product-categories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-categories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('product-categories');

  service.hooks(hooks);
};
