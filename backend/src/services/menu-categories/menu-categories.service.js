// Initializes the `MenuCategories` service on path `/menu-categories`
const createService = require('feathers-sequelize');
const createModel = require('../../models/menu-categories.model');
const hooks = require('./menu-categories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/menu-categories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('menu-categories');

  service.hooks(hooks);
};
