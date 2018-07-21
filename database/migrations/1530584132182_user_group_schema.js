const Schema = use('Schema');

class UserGroupSchema extends Schema {
  up() {
    this.table('user_group', table => {
      table
        .integer('member')
        .unsigned()
        .index();
      table
        .integer('group_id')
        .unsigned()
        .index();
      table
        .foreign('member')
        .references('users.id')
        .onDelete('cascade');
      table
        .foreign('group_id')
        .references('groups.id')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('conversation_user');
  }
}

module.exports = UserGroupSchema;
