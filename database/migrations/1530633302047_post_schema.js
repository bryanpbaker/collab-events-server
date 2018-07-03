const Schema = use('Schema');

class PostSchema extends Schema {
  up() {
    this.create('posts', table => {
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
      table.string('text').notNullable();
    });
  }

  down() {
    this.drop('posts');
  }
}

module.exports = PostSchema;
