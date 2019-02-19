// Initializes the `Staff` service on path `/staff`
const createService = require('feathers-sequelize');
const createModel = require('../../models/staff.model');
const hooks = require('./staff.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/staff', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('staff');

  service.hooks(hooks);
};
