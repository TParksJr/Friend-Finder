var express = require("express");
var parser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("FriendFinder server listening on: http://localhost:" + PORT);
});