const { authenticate } = require('@feathersjs/authentication').hooks;
const includeAssociations = require('../../hooks/include-associations');

module.exports = {
  before: {
    all: [], //authenticate('jwt')
    find: [
      includeAssociations({
        models: [
          {
            model: 'addresses'
          }
        ]
      })
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
