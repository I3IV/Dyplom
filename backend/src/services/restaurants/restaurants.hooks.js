const includeAssociations = require('../../hooks/include-associations');
const includeSchedule = require('../../hooks/include-schedule');

module.exports = {
  before: {
    all: [],
    find: [
      includeAssociations({
        models: [
          {
            model: 'restschedule',
            as: 'DaySchedules'
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
    get: [includeSchedule()],
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
