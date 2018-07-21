const Schema = use('Schema');

class EventSchema extends Schema {
  up() {
    this.create('events', table => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop('events');
  }
}

module.exports = EventSchema;
