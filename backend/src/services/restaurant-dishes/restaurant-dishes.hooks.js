const includeAssociations = require('../../hooks/include-associations');
const populateRestDish = require('../../hooks/populate-rest-dish');
module.exports = {
  before: {
    all: [],
    find: [
      includeAssociations({
        models: [
          {
            model: 'dish-sizes'
          },
          {
            model: 'dish-photos'
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
    find: [populateRestDish()],
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
