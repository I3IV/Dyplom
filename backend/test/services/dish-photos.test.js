const assert = require('assert');
const app = require('../../src/app');

describe('\'DishPhotos\' service', () => {
  it('registered the service', () => {
    const service = app.service('dish-photos');

    assert.ok(service, 'Registered the service');
  });
});
