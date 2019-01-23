const assert = require('assert');
const app = require('../../src/app');

describe('\'CustomerDeliveryAddresses\' service', () => {
  it('registered the service', () => {
    const service = app.service('customer-delivery-addresses');

    assert.ok(service, 'Registered the service');
  });
});
