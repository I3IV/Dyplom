const restaurantdb = require('./restaurantdb/restaurantdb.service.js');
const restaurants = require('./restaurants/restaurants.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(restaurantdb);
  app.configure(restaurants);
};
