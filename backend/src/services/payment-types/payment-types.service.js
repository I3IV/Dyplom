// Initializes the `PaymentTypes` service on path `/payment-types`
const createService = require('feathers-sequelize');
const createModel = require('../../models/payment-types.model');
const hooks = require('./payment-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/payment-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('payment-types');

  service.hooks(hooks);
};
