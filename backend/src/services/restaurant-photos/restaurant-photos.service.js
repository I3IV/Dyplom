// Initializes the `RestaurantPhotos` service on path `/restaurant-photos`
const createService = require('feathers-sequelize');
const createModel = require('../../models/restaurant-photos.model');
const hooks = require('./restaurant-photos.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/restaurant-photos', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('restaurant-photos');

  service.hooks(hooks);
};
