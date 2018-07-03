const Schema = use('Schema');

class ContactSchema extends Schema {
  up() {
    this.create('contacts', table => {
      table.increments();
      table.timestamps();
      table
        .integer('creator')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable();
      table
        .integer('event_id')
        .unsigned()
        .references('id')
        .inTable('events')
        .notNullable();
      table.string('name').notNullable();
      table.string('type').notNullable();
      table.string('value').notNullable();
    });
  }

  down() {
    this.drop('contacts');
  }
}

module.exports = ContactSchema;
