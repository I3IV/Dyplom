const assert = require('assert');
const app = require('../../src/app');

describe('\'TablesInReservation\' service', () => {
  it('registered the service', () => {
    const service = app.service('tables-in-reservation');

    assert.ok(service, 'Registered the service');
  });
});
