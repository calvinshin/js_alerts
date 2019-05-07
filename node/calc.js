var app = {
    add : function(a, b) {
        this.outputValue = a + b
    },
    subtract : function(a, b) {
        this.outputValue = a - b
    },
    multiply : function(a, b) {
        this.outputValue = a * b
    },
    divide : function(a, b) {
        this.outputValue = a / b
    },
    exp : function(a, b) {
        this.outputValue = Math.pow(a, b);
    },
    algebra : function(string) {
        var equation = process.argv[3].replace(/\s/g, "").toLowerCase();
        var m = parseFloat(equation.split("x")[0]);
        var y = parseFloat(equation.split("=")[1]);
        var b = parseFloat(equation.slice(m.length + 2, equation.indexOf("=")));

        this.outputValue = (y - b) / m
    },
    remainder : "",
    outputValue : "Returning the original value",
    outputFuntion : function() {
        console.log(this.outputValue)
    },
    convertNode : function() {
        this.number1 = parseFloat(process.argv[3])
        this.number2 = parseFloat(process.argv[4])
        this.operator(process.argv[2]);
    },
    operator : function(text) {
        if(typeof this[text.toLowerCase().trim()] !== "undefined") {
            eval("this." + text.toLowerCase().trim() + "(" + this.number1 + ", " + this.number2 + ")");
            this.outputFuntion();
        }
        else {
            console.log("The operator " + text + " is not a valid function.")
        }
    },
    initialize : function() {
        this.convertNode();
    }
}

app.initialize();