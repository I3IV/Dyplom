const assert = require('assert');
const app = require('../../src/app');

describe('\'FoodDelivery\' service', () => {
  it('registered the service', () => {
    const service = app.service('food-delivery');

    assert.ok(service, 'Registered the service');
  });
});
