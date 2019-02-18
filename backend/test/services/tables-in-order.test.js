const assert = require('assert');
const app = require('../../src/app');

describe('\'TablesInOrder\' service', () => {
  it('registered the service', () => {
    const service = app.service('tables-in-order');

    assert.ok(service, 'Registered the service');
  });
});
