const assert = require('assert');
const app = require('../../src/app');

describe('\'ItemStatus\' service', () => {
  it('registered the service', () => {
    const service = app.service('item-status');

    assert.ok(service, 'Registered the service');
  });
});
