const os = require("os");

// Platform
console.log(os.platform);
console.log(os.platform());

// CPU arch
console.log(os.arch());

// CPU Core info
console.log(os.cpus());

// Free memory
console.log(os.freemem());
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
