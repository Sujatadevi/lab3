const express = require('express');
const router = express.Router();
const peopleRouter = require('./routes/people')

router.use('/people', peopleRouter);
router.use('*', (req, res) => res.sendStatus(404));

module.exports = router;