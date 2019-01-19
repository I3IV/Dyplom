const restaurantdb = require('./restaurantdb/restaurantdb.service.js');
const restaurants = require('./restaurants/restaurants.service.js');
const restschedule = require('./restschedule/restschedule.service.js');
const customers = require('./customers/customers.service.js');
const customService = require('./custom-service/custom-service.service.js');
const addresses = require('./addresses/addresses.service.js');
const cities = require('./cities/cities.service.js');
const countries = require('./countries/countries.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(restaurantdb);
  app.configure(restaurants);
  app.configure(restschedule);
  app.configure(customers);
  app.configure(customService);
  app.configure(addresses);
  app.configure(cities);
  app.configure(countries);
};
