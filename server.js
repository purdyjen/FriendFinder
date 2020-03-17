var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require("./app/routing/apiRoutes")(app);
var htmlRoutes = require("./app/routing/htmlRoutes")(app);

apiRoutes;
htmlRoutes;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
