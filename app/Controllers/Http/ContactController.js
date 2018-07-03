'use strict'

/**
 * Resourceful controller for interacting with contacts
 */
class ContactController {
  /**
   * Show a list of all contacts.
   * GET contacts
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new contact.
   * GET contacts/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new contact.
   * POST contacts
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single contact.
   * GET contacts/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing contact.
   * GET contacts/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update contact details.
   * PUT or PATCH contacts/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a contact with id.
   * DELETE contacts/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ContactController
