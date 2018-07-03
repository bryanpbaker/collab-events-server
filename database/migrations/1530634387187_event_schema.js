const Schema = use('Schema');

class EventSchema extends Schema {
  up() {
    this.table('events', table => {
      table.string('name').notNullable();
      table.string('description');
      table
        .integer('group_id')
        .unsigned()
        .references('id')
        .inTable('groups')
        .notNullable();
    });
  }

  down() {
    this.table('events', table => {
      table.dropColumn('name');
      table.dropColumn('description');
      table.dropColumn('group_id');
    });
  }
}

module.exports = EventSchema;
