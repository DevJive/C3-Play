/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/jquery-ui/themes/base/jquery-ui.css');
app.import('bower_components/entypo/font/entypo.css');
app.import('bower_components/toastr/toastr.min.css');
app.import('bower_components/c3/c3.css');
app.import('bower_components/Jcrop/css/jquery.Jcrop.min.css');
//End CSS

app.import('bower_components/jquery/dist/jquery.min.js');
app.import('bower_components/jquery-ui/ui/minified/jquery-ui.min.js');
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

app.import('bower_components/jquery-validation/dist/jquery.validate.min.js');
app.import('bower_components/moment/min/moment.min.js');
app.import('bower_components/toastr/toastr.min.js');
app.import('bower_components/d3/d3.min.js');
app.import('bower_components/c3/c3.min.js');
app.import('bower_components/ember-c3/build/lib.js');
app.import('bower_components/Jcrop/js/jquery.Jcrop.min.js');
app.import('bower_components/pdfmake/build/vfs_fonts.js');
app.import('bower_components/underscore/underscore.js');


// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
