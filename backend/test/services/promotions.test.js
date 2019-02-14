const assert = require('assert');
const app = require('../../src/app');

describe('\'Promotions\' service', () => {
  it('registered the service', () => {
    const service = app.service('promotions');

    assert.ok(service, 'Registered the service');
  });
});
