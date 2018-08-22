var express = require("express");
var parser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.listen(PORT, function () {
    console.log("FriendFinder listening on port " + PORT);
});