// This one basicaly cheats.  Read the file source code, and echo it back out.

const {readFileSync} = require('fs');
console.log(readFileSync(__filename).toString());