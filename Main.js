let fs = require("fs");

let dictionary = require(".dictionary.js").DICTIONARY;
let lexer = require("./main.js").LEXER;
let parser = require("./main.js").PARSER;

global.vars = [];

fs.readFile("./code_test.sg", "utf-8", function (error, content) {

	if (error === null) {
		let lexems = lexer(content, dictionary);
		let parsedString = parser(lexems, dictionary);

		console.log(parsedString);


	}
	else {
		console.error("ERROR!");
		console.error(error);
	}

});

//I CODED THIS FULLY
