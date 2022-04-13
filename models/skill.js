const skills= [
  {skill: 'HTML', complete: true},
  {skill: 'CSS', complete: true},
  {skill: 'Javascript', complete: true},
  {skill: 'Python', complete: true},
  {skill: 'Java', complete: true},
  {skill: 'C++', complete: true},
  {skill: 'Node.js', complete: false},
  {skill: 'SQL', complete: true},
  {skill: 'API', complete: true},
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}
