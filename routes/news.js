//declare router
var router = require('express').Router();

//business logic
router.get('/news', function(req, res) {
    res.render('news/news');
});

//export route
module.exports = router;
