const Schema = use('Schema');

class EventSchema extends Schema {
  up() {
    this.table('events', table => {
      table
        .integer('creator')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable();
    });
  }

  down() {
    this.table('events', table => {
      table.dropColumn('creator');
    });
  }
}

module.exports = EventSchema;
