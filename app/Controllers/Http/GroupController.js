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
  async index({ auth }) {
    return Group.query().where('creator', auth.user.id);
  }

  /**
   * Create/save a new group.
   * POST groups
   */
  async store({ request, auth }) {
    const { name, description, members } = request.body;
    const newGroup = await Group.create({
      name,
      description,
      creator: auth.user.id
    });
    const groupMembers = await newGroup.members().attach(members);

    // TODO: clean up members etc.
    return {
      ...newGroup.$attributes,
      groupMembers
    };
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
