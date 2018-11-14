exports.up = function(knex, Promise) {
  return knex.schema.createTable("character", function(table) {
    table.increments()
    table.string("name")
    table.string("handle")
    table.string("avatarURL")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("character")
}
