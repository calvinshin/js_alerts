var query = "";
var beginDate = "";
var endDate = "";
var numberRecords = 0;

var pull = function() {
    $.ajax({
        url : "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + 
        query + 
            (beginDate > 1 ? "&begin_date=" + beginDate + "0101" : "") +
            (endDate > 1 ? "&end_date=" + endDate + "1231" : "") +
        "&api-key=JF6Yf3vut8XTrBuRhjI4THOG2psOTuse",
        // &begin_date=20120101
        // &end_date=20121231
        // 
        method : "GET"
    }).then(function(response) {
        console.log(response);
        docs = response.response.docs
        console.log(docs);
        generate(docs);

    })
}

$("#search").click( function() {
    // Set variables
    query = $("#searchterm").val()
    beginDate = $("#startyear").val()
    endDate = $("#endyear").val()
    numberRecords = $("#records").val();

    // Pull the jquery function
    pull();
    }
)

var generate = function(docs) {
    for(i = 0; i < numberRecords; i++) {

        // contentdiv as a container
        var contentDiv = $("<div>");
        contentDiv.addClass("contentDiv");

        // Append the number of the article (the top)
        var numberDiv = $("<div>");
        numberDiv.addClass("numberDiv")
        numberDiv.text(i + 1)

        // Append the .headline.print_headling
        var headlineDiv = $("<div>");
        headlineDiv.addClass("headlineDiv")
        headlineDiv.text(docs[i].headline.print_headline);

        // append the .byline.original
        var bylineDiv = $("<div>");
        bylineDiv.addClass("bylineDiv");
        bylineDiv.text(docs[i].byline.original)

        // Append all the divs into the contentDiv
        contentDiv.append(numberDiv, headlineDiv, bylineDiv)

        // Append the contentdiv
        $("#articlesDiv").append(contentDiv);
    }
}