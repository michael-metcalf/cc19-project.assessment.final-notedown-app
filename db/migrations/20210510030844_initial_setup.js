
exports.up = function(knex) {
  return knex.schema.createTable("notes", function (table) {
    table.increments();
    table.string("note_title");
    table.string("note_content");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("notes");
};
