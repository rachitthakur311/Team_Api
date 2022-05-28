const express = require('express');
const router = express.Router();
const teamListController = require('../Controllers/teamListController');


router.get('/', teamListController.getTeamList)

module.exports = router