var alerts = {
  error: function (err) {
    console.log("Error msg... : " + err);
  },
  warn: function () {
    console.log("warn msg...");
  },
  notice: function () {
    console.log("notice msg...");
  },
};

module.exports = alerts;
