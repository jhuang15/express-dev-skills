// Should name the model in uppercase and singular
const Skill = require('../models/skill');
const { render } = require('../server');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  Todo.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/skills'); 
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills')
}
function newSkill(req, res) {
  res.render('skills/new');
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  const skills = Skill.getAll();
  res.render('skills/index', { skills })
}