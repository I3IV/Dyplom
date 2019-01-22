const assert = require('assert');
const app = require('../../src/app');

describe('\'DishSizes\' service', () => {
  it('registered the service', () => {
    const service = app.service('dish-sizes');

    assert.ok(service, 'Registered the service');
  });
});
