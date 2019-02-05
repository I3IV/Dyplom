const assert = require('assert');
const app = require('../../src/app');

describe('\'Orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('orders');

    assert.ok(service, 'Registered the service');
  });
});
