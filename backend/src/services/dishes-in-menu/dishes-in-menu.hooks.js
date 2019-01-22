const includeAssociations = require('../../hooks/include-associations');
const populateDish = require('../../hooks/populate-dish');

module.exports = {
  before: {
    all: [],
    find: [
      includeAssociations({
        models: [
          {
            model: 'menu-categories'
          },
          {
            model: 'rest-dish-sizes'
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
    find: [populateDish()],
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
