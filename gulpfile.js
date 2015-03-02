var fs = require('fs');

if (fs.existsSync('../LDKn')) {
  require('../LDKn/gulp/includes')(require('gulp'));
} else if (fs.existsSync('node_modules/LDKn')) {
  require('LDKn/gulp/includes')(require('gulp'));
} else {
  console.log('Npm dependencies missing. Please run "npm install" and "bower install".');
  process.exit(1);
}
