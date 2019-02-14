// Initializes the `DishesInPromotion` service on path `/dishes-in-promotion`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dishes-in-promotion.model');
const hooks = require('./dishes-in-promotion.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dishes-in-promotion', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('dishes-in-promotion');

  service.hooks(hooks);
};
