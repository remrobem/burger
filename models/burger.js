let orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
      orm.all("burgers", function(ormResponse) {
        callbackb(ormResponse);
      });
    },
    // The variables cols and vals are arrays.
    createBurger: function(columns, values, callback) {
      orm.create("burgers", columns, values, function(ormResponse) {
        callback(ormResponse);
      });
    },

    devourBurger: function(columnValues, condition, callback) {
      orm.update("burgers", columnValues, condition, function(ormResponse) {
        callback(ormResponse);
      });
    },

    deleteBurger: function(condition, callback) {
        orm.update("burgers", condition, function(ormResponse) {
          callback(ormResponse);
        });
      }   
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  