// Initializes the `TablesInOrder` service on path `/tables-in-order`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tables-in-order.model');
const hooks = require('./tables-in-order.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tables-in-order', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tables-in-order');

  service.hooks(hooks);
};
