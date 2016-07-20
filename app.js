var express = require('express');
var app = express();

//routing
app.use(require('./routes'));

//templating
var ECT = require('ect');
var ectRenderer = ECT({
    watch: true,
    root: __dirname + '/views',
    ext: '.ect'
});
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

//ports
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));



app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
