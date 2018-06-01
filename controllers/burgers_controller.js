var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/createBurger", function (req, res) {
    burger.createBurger(["burger_name", "devoured"], [req.body.burger_name, "false"], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/devourBurger/:id", function (req, res) {
   let condition = `id = ${req.params.id}`;
    burger.devourBurger({devoured: "true"}, condition, function (result) {
        if (result.changedRows == 0) {
           return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Export routes for server.js to use.
module.exports = router;