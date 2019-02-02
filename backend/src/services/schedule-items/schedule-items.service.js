// Initializes the `ScheduleItems` service on path `/schedule-items-page`
const createService = require('feathers-sequelize');
const createModel = require('../../models/schedule-items.model');
const hooks = require('./schedule-items.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/schedule-items', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('schedule-items');

  service.hooks(hooks);
};
