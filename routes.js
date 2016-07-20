var express = require('express'),
    router = express.Router();

router.use(
    require('./routes/frontpage'),
    require('./routes/news'),
    require('./routes/about')
);



module.exports = router;
