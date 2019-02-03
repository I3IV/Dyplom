const includeAssociations = require('../../hooks/include-associations');

const scheduleFmt = require('../../hooks/schedule-fmt');

module.exports = {
  before: {
    all: [],
    find: [
      includeAssociations({
        models: [
          {
            as: 'schedule',
            model: 'restschedule'
          },
          {
            model: 'addresses'
          },
          {
            model: 'restaurant-photos'
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
    find: [scheduleFmt()],
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
