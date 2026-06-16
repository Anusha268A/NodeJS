// const od=require('os');


// console.log(os.platform());
// console.log(os.arch());
// console.log(os.hostname());
// //memory info
// console.log("free mem: ",os.freemem());
// console.log("Total mem: ",os.totalmem());

const os = require('os');

console.log("Platform:", os.platform());

console.log("Architecture:", os.arch());

console.log("CPU Cores:", os.cpus().length);

console.log("Hostname:", os.hostname());

console.log("Home Directory:", os.homedir());

console.log("Temp Directory:", os.tmpdir());

console.log("Free Memory:", os.freemem());

console.log("Total Memory:", os.totalmem());

console.log("Uptime:", os.uptime());

console.log("OS Type:", os.type());

console.log("OS Release:", os.release());