const assert = require('assert');
const app = require('../../src/app');

describe('\'ScheduleItems\' service', () => {
  it('registered the service', () => {
    const service = app.service('schedule-items-page');

    assert.ok(service, 'Registered the service');
  });
});
