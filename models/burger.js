let orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
      orm.all("burgers", function(ormResponse) {
        callbackb(ormResponse);
      });
    },
    // The variables cols and vals are arrays.
    create: function(columns, values, callback) {
      orm.create("burgers", columns, values, function(ormResponse) {
        callback(ormResponse);
      });
    },

    update: function(columnValues, condition, callback) {
      orm.update("burgers", columnValues, condition, function(ormResponse) {
        callback(ormResponse);
      });
    },

    delete: function(condition, callback) {
        orm.update("burgers", condition, function(ormResponse) {
          callback(ormResponse);
        });
      }   
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  