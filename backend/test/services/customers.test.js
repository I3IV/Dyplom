const assert = require('assert');
const app = require('../../src/app');

describe('\'Customers\' service', () => {
  it('registered the service', () => {
    const service = app.service('customers');

    assert.ok(service, 'Registered the service');
  });
});
