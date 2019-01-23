const assert = require('assert');
const app = require('../../src/app');

describe('\'ScheduleItems\' service', () => {
  it('registered the service', () => {
    const service = app.service('schedule-items');

    assert.ok(service, 'Registered the service');
  });
});
