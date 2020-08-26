var express = require('express'),
    router = express.Router();

var bugsList = [
    { id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date() },
    { id : 2, name: 'Data integrity checks failed', isClosed: true, createdAt: new Date() },
];


router.get('/', (req, res, next) => {
    res.json(bugsList);
});

router.get('/:id', (req, res, next) => {
    const requestedBugId = parseInt(req.params.id),
        requestedBug = bugsList.find(bug => bug.id === requestedBugId);
    if (requestedBug){
        res.json(requestedBug);
    } else {
        res.status(404).end();
    }
});


module.exports = router;