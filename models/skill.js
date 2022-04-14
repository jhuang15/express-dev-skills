const skills= [
  {id: 12345, skill: 'HTML', complete: true},
  {id: 45673, skill: 'CSS', complete: true},
  {id: 24657, skill: 'Javascript', complete: true},
  {id: 34556, skill: 'Python', complete: true},
  {id: 23939, skill: 'Java', complete: true},
  {id: 93959, skill: 'C++', complete: true},
  {id: 40593, skill: 'Node.js', complete: false},
  {id: 32452, skill: 'SQL', complete: true},
  {id: 20393, skill: 'API', complete: true},
];

module.exports = {
  getAll,
  getOne
};
function getAll() {
  return skills;
}
function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return skills.find(skill => skill.id === id);
}