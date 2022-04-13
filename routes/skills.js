var express = require('express');
var router = express.Router();

// routes/skills.js

var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

module.exports = router;
