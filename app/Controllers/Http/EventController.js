'use strict'

/**
 * Resourceful controller for interacting with events
 */
class EventController {
  /**
   * Show a list of all events.
   * GET events
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new event.
   * GET events/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new event.
   * POST events
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single event.
   * GET events/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing event.
   * GET events/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = EventController
