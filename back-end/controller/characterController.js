const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('character')
  .then(characters => res.json({ characters : characters }))
}

module.exports = {
  getAll
}