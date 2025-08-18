/**
 * OS Module in Node.js
 * -----------------------
 * The 'os' module provides information about the operating system on which 
 * the Node.js app is running. It helps us get system details like CPU, memory, 
 * network interfaces, platform type, and more.
 */

const os = require("os");

// 1. os.platform() → Returns the operating system platform (e.g., 'win32', 'linux', 'darwin')
console.log("Platform:", os.platform());

// 2. os.arch() → Returns the CPU architecture (e.g., 'x64', 'arm')
console.log("Architecture:", os.arch());

// 3. os.freemem() → Returns the amount of free system memory in bytes
console.log("Free Memory:", os.freemem(), "bytes");

// 4. os.totalmem() → Returns the total amount of system memory in bytes
console.log("Total Memory:", os.totalmem(), "bytes");

// 5. os.uptime() → Returns the system uptime in seconds
console.log("System Uptime:", os.uptime(), "seconds");

// 6. os.homedir() → Returns the home directory of the current user
console.log("Home Directory:", os.homedir());

// 7. os.hostname() → Returns the hostname of the system
console.log("Hostname:", os.hostname());

// 8. os.networkInterfaces() → Returns details about network interfaces
console.log("Network Interfaces:", os.networkInterfaces());

// 9. os.cpus() → Returns information about each logical CPU core
console.log("CPU Info:", os.cpus());

// 10. os.tmpdir() → Returns the operating system's default temp directory
console.log("Temp Directory:", os.tmpdir());
