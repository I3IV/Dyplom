const assert = require('assert');
const app = require('../../src/app');

describe('\'Staff\' service', () => {
  it('registered the service', () => {
    const service = app.service('staff');

    assert.ok(service, 'Registered the service');
  });
});
