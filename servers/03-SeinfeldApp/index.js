mysql = require("mysql");
express = require("express");
password = require("../../../../../password")

// ---------------------------------------------- SQL
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: password,
    database: "friends"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MYSQL");
})

// ---------------------------------------------- Tableify
tableify = function(array) {
    html = "<table>"

    // Create the table
    html+= "<tr><th>ID</th><th>Name</th><th>Coolness Points</th><th>Attitude</th></tr>"
    
    for(i = 0; i < array.length; i++) {
        html+= "<tr>"

        html+= "<th>" + array[i].id + "</th>"
        html+= "<th>" + array[i].name + "</th>"
        html+= "<th>" + array[i].coolness_points + "</th>"
        html+= "<th>" + array[i].attitude + "</th>"

        html+= "</tr>"
    }
    
    html+= "</table>"
    html+= "<script type='text/javascript'>console.log('Test');</script>"

    return html
}



// ---------------------------------------------- Express

PORT = (process.env.PORT || 3000);

app = express();

app.get("/", function(req,res) {
    // establish a switch for a type
    type = req.params.type;
    // parameter = req.params.parameter;
    if(!type) {
        type = "none";
    }
    // if(!parameter) {
    //     parameter = "none";
    // }

    // get the data from the sql database, since it's all going to be pulled regardless of the actually end-result
    connection.query("SELECT * FROM cast", function(err, result) {
        res.send(tableify(result));        
    });

    // Switch operation to return result based on the type container

});

app.get("/coolness-chart", function(req,res) {
    // establish a switch for a type
    type = req.params.type;
    // parameter = req.params.parameter;
    if(!type) {
        type = "none";
    }
    // if(!parameter) {
    //     parameter = "none";
    // }

    // get the data from the sql database, since it's all going to be pulled regardless of the actually end-result
    connection.query("SELECT * FROM cast ORDER BY coolness_points DESC", function(err, result) {
        res.send(tableify(result));        
    });

    // Switch operation to return result based on the type container

});

app.listen(PORT, function() {
    console.log("Listening on localhost:" + PORT);
});