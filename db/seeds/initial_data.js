
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("notes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("notes").insert([
        {id: 1, note_title: "First note", note_content: "This is the first note."},
        {id: 2, note_title: "Second note", note_content: "This is the second note."},
        {id: 3, note_title: "Third note", note_content: "This is the third note."}
      ]);
    });
};
