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

router.post('/', (req, res, next)=>{
    const bugData = req.body,
        newBugId = bugsList.reduce((result, bug) => result > bug.id ? result : bug.id, 0) + 1,
        newBug = { ...bugData, id : newBugId };
    bugsList.push(newBug);
    res.status(201).json(newBug);
});


module.exports = router;