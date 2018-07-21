'use strict'

/**
 * Resourceful controller for interacting with usergroups
 */
class UserGroupController {
  /**
   * Show a list of all usergroups.
   * GET usergroups
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new usergroup.
   * GET usergroups/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new usergroup.
   * POST usergroups
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single usergroup.
   * GET usergroups/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing usergroup.
   * GET usergroups/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update usergroup details.
   * PUT or PATCH usergroups/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a usergroup with id.
   * DELETE usergroups/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserGroupController
