const User = use('App/Models/User');
const Group = use('App/Models/Group');

/**
 * Resourceful controller for interacting with groups
 */
class GroupController {
  /**
   * Show a list of all groups created by the current user
   * GET groups
   */
  async index({ request, response, auth }) {
    return Group.query().where('creator', auth.user.$attributes.id);
  }

  /**
   * Create/save a new group.
   * POST groups
   */
  async store({ request, response, auth }) {
    const groupData = request.only(['name', 'description']);

    return Group.create({
      ...groupData,
      creator: auth.user.$attributes.id
    });
  }

  /**
   * Display a single group.
   * GET groups/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing group.
   * GET groups/:id/edit
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update group details.
   * PUT or PATCH groups/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a group with id.
   * DELETE groups/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = GroupController;
