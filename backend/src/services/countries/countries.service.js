// Initializes the `Countries` service on path `/countries`
const createService = require('feathers-sequelize');
const createModel = require('../../models/countries.model');
const hooks = require('./countries.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/countries', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('countries');

  service.hooks(hooks);
};
