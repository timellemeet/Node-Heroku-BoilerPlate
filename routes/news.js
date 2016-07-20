var express = require('express'),
    router = express.Router();

router.get('/news', function(req, res) {
    res.send('this is about news <a href="/about">about</a>');
});

module.exports = router;
