// Initializes the `TablesInReservation` service on path `/tables-in-reservation`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tables-in-reservation.model');
const hooks = require('./tables-in-reservation.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tables-in-reservation', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tables-in-reservation');

  service.hooks(hooks);
};
