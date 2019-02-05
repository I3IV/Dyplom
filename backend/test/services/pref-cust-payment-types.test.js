const assert = require('assert');
const app = require('../../src/app');

describe('\'PrefCustPaymentTypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('pref-cust-payment-types');

    assert.ok(service, 'Registered the service');
  });
});
