const Model = use('Model');

class Group extends Model {
  members() {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/UserGroup'
    );
  }
}

module.exports = Group;
