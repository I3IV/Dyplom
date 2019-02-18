// Initializes the `Tables` service on path `/tables`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tables.model');
const hooks = require('./tables.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tables', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tables');

  service.hooks(hooks);
};
