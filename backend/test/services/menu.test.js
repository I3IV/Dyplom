const assert = require('assert');
const app = require('../../src/app');

describe('\'Menu\' service', () => {
  it('registered the service', () => {
    const service = app.service('menu');

    assert.ok(service, 'Registered the service');
  });
});
