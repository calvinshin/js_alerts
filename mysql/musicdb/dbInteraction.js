mysql = require("mysql");
password = require("../../../../../password")

keyword = "'TWICE'";
keyword2 = "Pop";

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: password,
  database: "playlist_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected using id " + connection.threadId)
    connection.query("SELECT * FROM songs", function(err, res) {
        if (err) throw err;
        console.log("\n\n----------------------------------------------\n\nWhole table!")
        console.log(res);
    });
    connection.query("SELECT * FROM songs " +
    "WHERE artist = " + keyword, function(err, res) {
        if (err) throw err;
        console.log("\n\n----------------------------------------------\n\nTwice Table!");
        console.log(res);
    })
    connection.query("SELECT * FROM `songs` WHERE `genre` = ?", keyword2, function(err, res) {
        if(err) throw err;
        console.log("\n\n----------------------------------------------\n\npop POP!");
        console.log(res);
    })
    connection.end();

})