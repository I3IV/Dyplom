// Initializes the `restaurantdb` service on path `/restaurantdb`
const createService = require('feathers-sequelize');
const createModel = require('../../models/restaurantdb.model');
const hooks = require('./restaurantdb.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/restaurantdb', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('restaurantdb');

  service.hooks(hooks);
};
