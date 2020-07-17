
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("description", 255);
      tbl.boolean("completed").notNullable().defaultTo(false)
  })
  .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("description", 255).notNullable();
      tbl.string("notes", 255);
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl.integer("projectID").notNullable()
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
  })
  .createTable("resources", (tbl) => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl.string("description", 255);
  })
  .createTable("projects_and_resources", (tbl) => {
    tbl
      .integer("projectID")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
      .onDelete("RESTRICT");

    tbl
      .integer("resourceID")
      .unsigned()
      .references("id")
      .inTable("resources")
      .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
      .onDelete("RESTRICT");
  });
};

exports.down = function(knex) {
  
};
