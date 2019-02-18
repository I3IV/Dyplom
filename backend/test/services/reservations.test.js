const assert = require('assert');
const app = require('../../src/app');

describe('\'Reservations\' service', () => {
  it('registered the service', () => {
    const service = app.service('reservations');

    assert.ok(service, 'Registered the service');
  });
});
