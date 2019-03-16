const fs = require("fs");
const path = require("path");

// Create a folder
// fs.mkdir(path.join(__dirname, "noslash"), {}, function(err) {
//   if (err) throw err;
//   console.log("Folder created");
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   function(err) {
//     if (err) throw err;
//     console.log("File created");
//   }
// );

//Writes over but does not erase. Results in "ChangeWorld!" via combining with the initial writeFile
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Change", function(
//   err
// ) {
//   if (err) throw err;
//   console.log("File written");

//   //Append
//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     " Appended",
//     function(err) {
//       if (err) throw err;
//       console.log("File appended");
//     }
//   );
// });

// Read File
// Executed after the first two writeFiles but before the append
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", function(
//   err,
//   data
// ) {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "hiagain.txt"),
  err => {
    console.log("File renamed");
  }
);
