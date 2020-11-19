const PeopleController = require('../controllers/people');
const express = require('express');
const router = express.Router();


router.get('/', PeopleController.getPeople);
router.get('/:id', PeopleController.getPeopleById);

module.exports = router;

