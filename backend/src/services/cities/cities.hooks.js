const includeAssociations = require("../../hooks/include-associations");

module.exports = {
  before: {
    all: [],
    find: [
      includeAssociations({
        models: [
          {
            model: "addresses"
          },
          {
            model: "countries"
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
