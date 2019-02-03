const assert = require('assert');
const app = require('../../src/app');

describe('\'DishProducts\' service', () => {
  it('registered the service', () => {
    const service = app.service('dish-products');

    assert.ok(service, 'Registered the service');
  });
});
