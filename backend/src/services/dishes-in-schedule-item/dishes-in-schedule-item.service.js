// Initializes the `DishesInScheduleItem` service on path `/dishes-in-schedule-item`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dishes-in-schedule-item.model');
const hooks = require('./dishes-in-schedule-item.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dishes-in-schedule-item', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('dishes-in-schedule-item');

  service.hooks(hooks);
};
