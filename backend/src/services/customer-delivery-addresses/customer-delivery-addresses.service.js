// Initializes the `CustomerDeliveryAddresses` service on path `/customer-delivery-addresses`
const createService = require('feathers-sequelize');
const createModel = require('../../models/customer-delivery-addresses.model');
const hooks = require('./customer-delivery-addresses.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/customer-delivery-addresses', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('customer-delivery-addresses');

  service.hooks(hooks);
};
