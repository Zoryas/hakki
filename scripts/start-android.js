process.env.HOST = process.env.HOST || '0.0.0.0';
process.env.PORT = process.env.PORT || '4100';

console.log(`Starting HAK for Android on ${process.env.HOST}:${process.env.PORT}...`);

require('../server.js');
