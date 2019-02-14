const assert = require('assert');
const app = require('../../src/app');

describe('\'DishesInPromotion\' service', () => {
  it('registered the service', () => {
    const service = app.service('dishes-in-promotion');

    assert.ok(service, 'Registered the service');
  });
});
