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

router.put('/:id', (req, res, next)=>{
    const updatedBug = req.body;
    const updatedBugId = parseInt(req.params.id);
    const existingBug = bugsList.find(bug => bug.id === updatedBugId);
    if (existingBug) {
        bugsList = bugsList.map(bug => bug.id === updatedBugId ? updatedBug : bug );
        res.status(200).json(updatedBug);
    } else {
        res.status(404).end();
    }
})

router.delete('/:id', (req, res, next) => {
    const bugIdToDelete = parseInt(req.params.id);
    const existingBug = bugsList.find(bug => bug.id === bugIdToDelete);
    if (existingBug) {
        bugsList = bugsList.filter(bug => bug.id !== bugIdToDelete);
        res.status(200).json({});
    } else {
        res.status(404).end();
    }
})


module.exports = router;