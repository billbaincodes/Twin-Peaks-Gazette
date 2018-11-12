const knex = require('../db/connection')

const getAll = (req, res, next) => {

  return knex.select('post.id AS post_id', 'post.title', 'post.body', 'post.imageURL', 'character.id AS character_id', 'character.name', 'character.avatarURL').from("post")
    .innerJoin("character", "post.character_id", "character.id")
    .orderBy('post_id', 'desc')
    .then(posts => res.json({ posts : posts }))

}

const newPost = (req, res, next) => {

  body = req.body
  return knex('post')
    .insert(body)
    .returning('*')
    .then(response => res.json({ newPost : response[0] }))

}

const updatePost = (req, res, next) => {
  id = req.params.id
  body = req.body

  return knex('post')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(response => res.json({ updatedPost : response[0] }))

}

const deletePost = (req, res, next) => {

  id = req.params.id
  return knex('post')
    .where('id', id)
    .delete()
    .returning('*')
    .then(response => res.json({ deletedPost : response[0]}))

}


module.exports = {
    getAll,
    newPost,
    deletePost
}