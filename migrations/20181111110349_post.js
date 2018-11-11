exports.up = function(knex, Promise) {
  return knex.schema.createTable("post", function(table) {
    table.increments();
    table.string("title");
    table.string("body");
    table.string("imageURL");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("post");
};
