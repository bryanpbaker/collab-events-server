const Schema = use('Schema');

class GroupSchema extends Schema {
  up() {
    this.create('groups', table => {
      table.increments();
      table.timestamps();
      table.string('name').notNullable();
      table.string('description');
    });
  }

  down() {
    this.table('groups', table => {
      table.dropColumn('name');
      table.dropColumn('description');
    });
  }
}

module.exports = GroupSchema;
