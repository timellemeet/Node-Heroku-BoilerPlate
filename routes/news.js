var express = require('express'),
    router = express.Router();

router.get('/news', function(req, res) {
    res.render('news/news');
});

module.exports = router;
