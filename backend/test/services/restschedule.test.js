const assert = require('assert');
const app = require('../../src/app');

describe('\'restschedule\' service', () => {
  it('registered the service', () => {
    const service = app.service('restschedule');

    assert.ok(service, 'Registered the service');
  });
});
