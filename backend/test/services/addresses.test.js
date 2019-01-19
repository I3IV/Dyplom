const assert = require('assert');
const app = require('../../src/app');

describe('\'Addresses\' service', () => {
  it('registered the service', () => {
    const service = app.service('addresses');

    assert.ok(service, 'Registered the service');
  });
});
