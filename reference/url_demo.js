const url = require("url");

const myUrl = new URL("http://mysite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.toJSON());

// Host root domain -- would include :PORT
console.log(myUrl.host);

// Hostname -- no port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized querry
console.log(myUrl.search);
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
console.log(myUrl.href);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));
