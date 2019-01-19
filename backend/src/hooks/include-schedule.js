// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    const { app, result: restaurant } = context;
    const schedule = await app
      .service('restschedule')
      .find({ query: { Restaurant_id: restaurant.id } })
      .then(res => res.data)
      .then(weekDays =>
        weekDays.map(weekDay => ({
          ...weekDay,
          Opened: weekDay.Opened.substring(0, 5),
          Closed: weekDay.Closed.substring(0, 5),
          Deadline: weekDay.Deadline.substring(0, 5),
          DayName: dayNames[weekDay.Day]
        }))
      );
    console.log('SCHEDULE ON SERVER', schedule);
    restaurant.schedule = schedule;
    return context;
  };
};
