const Event = use('App/Models/Event');

/**
 * Resourceful controller for interacting with events
 */
class EventController {
  /**
   * Show a list of all events.
   * GET events
   */
  async index({ request }) {
    return Event.query().where('group_id', request.headers().groupid);
  }

  /**
   * Create/save a new event.
   * POST events
   */
  async store({ request, response, auth }) {
    const { groupId, name, description } = request.body;

    if (name) {
      return Event.create({
        group_id: groupId,
        creator: auth.user.id,
        name,
        description
      });
    }

    // if a name isn't provided, send a 400
    response.status(400).json({
      success: false,
      message: 'Please provide a name for your event'
    });
  }

  /**
   * Display a single event.
   * GET events/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing event.
   * GET events/:id/edit
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update event details.
   * PUT or PATCH events/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a event with id.
   * DELETE events/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = EventController;
