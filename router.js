var express = require('express'),
    router = express.Router();

/*
router.use(
    require('./routes/frontpage'),
    require('./routes/news'),
    require('./routes/about')
);
*/
glob.sync('./routes/*.js').forEach(function(file) {
    router.use(require(path.resolve(file)));
});

//router.use(requireDir('./routes'););

module.exports = router;
