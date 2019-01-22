const assert = require('assert');
const app = require('../../src/app');

describe('\'DishesInMenu\' service', () => {
  it('registered the service', () => {
    const service = app.service('dishes-in-menu');

    assert.ok(service, 'Registered the service');
  });
});
