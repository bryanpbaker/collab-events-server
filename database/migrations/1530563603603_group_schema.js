const Schema = use('Schema');

class GroupSchema extends Schema {
  up() {
    this.table('groups', table => {
      table
        .integer('creator')
        .unsigned()
        .references('id')
        .inTable('users');
    });
  }

  down() {
    this.table('groups', table => {
      table.dropColumn('creator');
    });
  }
}

module.exports = GroupSchema;
