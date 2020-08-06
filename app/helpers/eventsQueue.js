export const eventsQueue = (function () {
  const events = [];

  return {
    addEvent: function (val) {
      events.push(val);
    },
    removeEvent: function () {
      return events.shift();
    },
  };
})();
