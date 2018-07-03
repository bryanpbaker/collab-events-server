;

const Schema = use('Schema');

class UserGroupSchema extends Schema {
  up() {
    this.renameTable('user_groups', 'user_group');
  }

  down() {
    this.renameTable('user_group', 'user_groups');
  }
}

module.exports = UserGroupSchema;
