const Schema = use('Schema');

class UsersSchema extends Schema {
  up() {
    this.table('users', table => {
      table.string('name').notNullable();
      table.string('picture');
    });
  }

  down() {
    this.table('users', table => {
      table.dropColumn('name');
      table.dropColumn('picture');
    });
  }
}

module.exports = UsersSchema;
