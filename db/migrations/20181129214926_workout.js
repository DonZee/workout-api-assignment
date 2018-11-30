
exports.up = function(knex, Promise) {
    return knex.schema.createTable("workout",(table)=>{
      table.increments();
      table.date("date");
      table.string("name");
      table.string("description")
      table.integer("rating")
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("workout");
  };