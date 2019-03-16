const path = require("path");

// Basen file name
console.log(path.basename(__filename));

// Just directory
console.log(path.dirname(__filename));

// File extensio
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
