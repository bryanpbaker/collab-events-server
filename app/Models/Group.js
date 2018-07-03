const Model = use('Model');

class Group extends Model {
  members() {
    return this.belongsToMany('App/Models/User', 'group_id', 'member')
      .pivotTable('user_group')
      .withTimestamps();
  }
}

module.exports = Group;
