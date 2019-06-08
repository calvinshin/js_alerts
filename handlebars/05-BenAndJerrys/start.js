express = require("express");
exphbs = require("express-handlebars");

PORT = process.argv.PORT || 3000;

app = express();


var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    res.render("icecream", icecreams[0]);
});


app.get("/icecream/:name", function(req, res) {
    for(var i = 0; i < icecreams.length; i++) {
        if(icecreams[i].name === req.params.name) {
            return res.render("icecream", icecreams[i]);
        }
    }
    return res.render("notfound", "")
});

app.get("/icecreams", function(req, res) {
    res.render("multiple", {ics: icecreams})
});


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  