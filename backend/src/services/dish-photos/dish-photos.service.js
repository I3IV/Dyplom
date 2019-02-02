// Initializes the `DishPhotos` service on path `/dish-photos`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dish-photos.model');
const hooks = require('./dish-photos.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dish-photos', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('dish-photos');

  service.hooks(hooks);
};
