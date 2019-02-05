const assert = require('assert');
const app = require('../../src/app');

describe('\'AdditionalProductsForOrder\' service', () => {
  it('registered the service', () => {
    const service = app.service('additional-products-for-order');

    assert.ok(service, 'Registered the service');
  });
});
