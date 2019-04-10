const path = require('path');
const fs = require('fs');
const solc = require('solc');

const rxotcPath = path.resolve(__dirname, 'contracts', 'rxotc.sol');
const source = fs.readFileSync(rxotcPath, 'utf8');

//console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':rxotc'];
