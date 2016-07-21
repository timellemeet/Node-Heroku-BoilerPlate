var express = require('express');
var app = express();

//routing every file in routes
var glob = require('glob'),
    path = require('path');

glob.sync('./routes/*.js').forEach(function(file) {
    app.use(require(path.resolve(file)));
});

//templating
var ECT = require('ect');
var ectRenderer = ECT({
    watch: true,
    root: __dirname + '/views',
    ext: '.ect',
    gzip: true
});
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

//ports
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/assets/public'));

//log
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

console.log(process.env.NODE_ENV);
