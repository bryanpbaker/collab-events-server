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
  async store({ request, response, auth }) {
    const { name, description, members } = request.body;
    // make sure a name is provided
    if (name) {
      const newGroup = await Group.create({
        name,
        description,
        creator: auth.user.id
      });
      // attach the group's members
      const groupMembers = await newGroup
        .members()
        .attach([auth.user.id, ...members]);
      // send back the group with the members
      return {
        ...newGroup.$attributes,
        groupMembers
      };
    }
    // if a name isn't provided, send a 400
    response.status(400).json({
      success: false,
      message: 'Please provide a name for your group'
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
