var express = require('express'),
    router = express.Router();

router.get('/', (req, res, next) => {
    res.send('All the bugs will be displayed here');
});

module.exports = router;