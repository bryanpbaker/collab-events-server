const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token');
  }

  groups() {
    return this.hasMany('App/Models/Group', 'id', 'creator');
  }

  groupsAsMember() {
    return this.belongsToMany(
      'App/Models/Group',
      'member',
      'group_id'
    ).pivotTable('user_group');
  }

  events() {
    return this.hasMany('App/Models/Event', 'id', 'creator');
  }

  messages() {
    return this.hasMany('App/Models/Message', 'id', 'sender');
  }

  posts() {
    return this.hasMany('App/Models/Post', 'id', 'creator');
  }

  contacts() {
    return this.hasMany('App/Models/Contact', 'id', 'creator');
  }
}

module.exports = User;
