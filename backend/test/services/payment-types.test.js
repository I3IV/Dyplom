const assert = require('assert');
const app = require('../../src/app');

describe('\'PaymentTypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('payment-types');

    assert.ok(service, 'Registered the service');
  });
});
