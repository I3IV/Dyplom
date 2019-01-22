const assert = require('assert');
const app = require('../../src/app');

describe('\'RestDishSizes\' service', () => {
  it('registered the service', () => {
    const service = app.service('rest-dish-sizes');

    assert.ok(service, 'Registered the service');
  });
});
