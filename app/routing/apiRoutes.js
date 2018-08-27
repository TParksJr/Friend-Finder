var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var results = req.body;
        console.log("Results are: " + results);
        var newUserScores = results.scores;
        var matchName = "";
        var matchImage = "";
        var totalDifference = 1000;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - newUserScores[j]);
            };
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            };
        };

        console.log("Matched name is: " + matchName);
        console.log("Matched image is: " + matchImage);

        friends.push(results);

        res.json({
            matchName: matchName,
            matchImage: matchImage
        });
    });
};