const Schema = use('Schema');

class UserGroupSchema extends Schema {
  up() {
    this.create('user_group', table => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop('user_group');
  }
}

module.exports = UserGroupSchema;
