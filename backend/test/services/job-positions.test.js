const assert = require('assert');
const app = require('../../src/app');

describe('\'JobPositions\' service', () => {
  it('registered the service', () => {
    const service = app.service('job-positions');

    assert.ok(service, 'Registered the service');
  });
});
