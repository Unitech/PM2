


var PM2 = require('../../..');

var pm2 = new PM2.custom({
  cwd : __dirname
});

PM2.reload('echo', function(err) {
  if (err) throw err;
});
