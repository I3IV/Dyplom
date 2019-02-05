const assert = require('assert');
const app = require('../../src/app');

describe('\'ProductCategories\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-categories');

    assert.ok(service, 'Registered the service');
  });
});
