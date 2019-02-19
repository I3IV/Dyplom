// Initializes the `JobPositions` service on path `/job-positions`
const createService = require('feathers-sequelize');
const createModel = require('../../models/job-positions.model');
const hooks = require('./job-positions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/job-positions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('job-positions');

  service.hooks(hooks);
};
