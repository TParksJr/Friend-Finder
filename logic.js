$(function () {

    var friends = require("app/data/friends.js");

    $(document).on("click", "#submit", function (event) {

        event.preventDefault();

        var data = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $("#q1").val().trim(),
                $("#q2").val().trim(),
                $("#q3").val().trim(),
                $("#q4").val().trim(),
                $("#q5").val().trim(),
                $("#q6").val().trim(),
                $("#q7").val().trim(),
                $("#q8").val().trim(),
                $("#q9").val().trim(),
                $("#q10").val().trim()
            ]
        };
        friends.push(data);
        console.log(friends);
    });

});