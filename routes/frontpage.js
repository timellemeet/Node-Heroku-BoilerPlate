var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.send("Home fissa test page toch <a href='/news'>news</a>");
});

module.exports = router;
