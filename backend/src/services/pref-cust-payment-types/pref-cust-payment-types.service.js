// Initializes the `PrefCustPaymentTypes` service on path `/pref-cust-payment-types`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pref-cust-payment-types.model');
const hooks = require('./pref-cust-payment-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pref-cust-payment-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('pref-cust-payment-types');

  service.hooks(hooks);
};
