const Schema = use('Schema');

class MessageSchema extends Schema {
  up() {
    this.create('messages', table => {
      table.increments();
      table.timestamps();
      table
        .integer('sender')
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
      table.string('text').notNullable();
    });
  }

  down() {
    this.drop('messages');
  }
}

module.exports = MessageSchema;
