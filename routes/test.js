var express = require('express'),
    router = express.Router();

router.get('/test', function(req, res) {
    res.render('news/news');
});

module.exports = router;
