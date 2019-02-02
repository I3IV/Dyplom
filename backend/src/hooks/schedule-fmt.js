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
module.exports = function() {
  return async context => {
    const { result } = context;
    const restaurants = result.data;
    context.result.data = restaurants.map(r => {
      const newSchedule = r.schedule.map(wd => ({
        ...wd.toJSON(),
        Opened: wd.Opened.substring(0, 5),
        Closed: wd.Closed.substring(0, 5),
        Deadline: wd.Deadline.substring(0, 5),
        DayName: dayNames[wd.Day]
      }));
      return { ...r.toJSON(), schedule: newSchedule };
    });
    return context;
  };
};
