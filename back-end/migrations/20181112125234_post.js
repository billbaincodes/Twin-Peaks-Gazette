exports.up = function(knex, Promise) {
  return knex.schema.createTable("post", function(table) {
  table.increments()
  table.string("title")
  table.string("body")
  table.string("imageURL")
  table.integer("character_id").references('character.id').unsigned().onDelete('cascade')
  })
  }
  
  exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("post")
  }