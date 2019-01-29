// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    const { method, result } = context;
    const weekDays = method === "find" ? result.data : [result];
    weekDays.map(weekDay => {
      weekDay.Opened = weekDay.Opened.substring(0, 5);
      weekDay.Closed = weekDay.Closed.substring(0, 5);
      weekDay.Deadline = weekDay.Deadline.substring(0, 5);
    });
    return context;
  };
};
