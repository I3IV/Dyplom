// Initializes the `RestDishSizes` service on path `/rest-dish-sizes`
const createService = require('feathers-sequelize');
const createModel = require('../../models/rest-dish-sizes.model');
const hooks = require('./rest-dish-sizes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rest-dish-sizes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('rest-dish-sizes');

  service.hooks(hooks);
};
