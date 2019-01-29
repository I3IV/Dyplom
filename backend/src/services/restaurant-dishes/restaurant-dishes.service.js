// Initializes the `RestaurantDishes` service on path `/restaurant-dishes`
const createService = require('feathers-sequelize');
const createModel = require('../../models/restaurant-dishes.model');
const hooks = require('./restaurant-dishes.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/restaurant-dishes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('restaurant-dishes');

  service.hooks(hooks);
};
