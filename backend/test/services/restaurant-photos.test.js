const assert = require('assert');
const app = require('../../src/app');

describe('\'RestaurantPhotos\' service', () => {
  it('registered the service', () => {
    const service = app.service('restaurant-photos');

    assert.ok(service, 'Registered the service');
  });
});
