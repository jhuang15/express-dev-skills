// Should name the model in uppercase and singular
const Skill = require('../models/skill');


module.exports = {
  index
};

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}
