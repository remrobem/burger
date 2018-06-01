// Import MySQL connection.
let dbConnection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}


let orm = {

    selectAll: function (table, callback) {
        let queryString = "SELECT * FROM " + table + ";";
        dbConnection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(ormResponse);
        });
    },

    insertOne: function (table, columns, values, callback) {
        let queryString = "INSERT INTO" + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        dbConnection.query(queryString, values, function (err, result) {
            if (err) {
                throw err;
            }
            callback(ormResponse);
        });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    update: function (table, columnValues, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(columns);
        queryString += " WHERE ";
        queryString += condition;

        dbConnection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(ormResponse);
        });
    },

    delete: function (table, condition, callback) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(ormResponse);
        });
    },
}

// Export the orm object for the model (cat.js).
module.exports = orm;