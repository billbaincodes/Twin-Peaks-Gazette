const knex = require('../db/connection')

const getAll = (req, res, next) => {
  return knex('post')
      .orderBy('id', 'asc')
      .then(posts => res.json({posts : posts}))
}

module.exports = {
    getAll
}