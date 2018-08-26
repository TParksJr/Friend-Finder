var friends = require("../data/friends.js");

module.exports = function (app) {

    var temp = {
        name: "",
        score: 0
    };

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        friends.push(req.body);
        console.log(friends);

        res.status(200).end();
    });
};