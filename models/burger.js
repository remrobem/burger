let orm = require("../config/orm.js");

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (ormResponse) {
      callback(ormResponse);
    });
  },
  // The variables cols and vals are arrays.
  createBurger: function (columns, values, callback) {
    orm.insertOne("burgers", columns, values, function (ormResponse) {
      callback(ormResponse);
    });
  },

  devourBurger: function (columnValue, condition, callback) {
    orm.update("burgers", columnValue, condition, function (ormResponse) {
      callback(ormResponse);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;