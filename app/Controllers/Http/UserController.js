const User = use('App/Models/User');

class UserController {
  /**
   * create a new user with required fields
   * @param {Object} context - destructure request
   */
  async store({ request }) {
    const { email, name, username, password, picture } = request.body;

    try {
      const user = await User.create({
        email: email.toLowerCase(),
        name,
        username,
        picture,
        password
      });

      return {
        success: true,
        user: {
          email: user.email,
          name: user.name,
          username: user.username,
          picture
        }
      };
    } catch (error) {
      return {
        success: false,
        error
      };
    }
  }

  /**
   * generate a jwt for a user based on login creds
   * @param {Object} context - destructure request and auth
   */
  async login({ request, response, auth }) {
    const { username, password } = request.body;
    try {
      const user = await User.findBy('username', username);

      if (user) {
        const { type, token } = await auth.attempt(
          user.$attributes.email,
          password
        );

        return {
          success: true,
          type,
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            name: user.name,
            picture: user.picture
          }
        };
      }
    } catch (error) {
      return {
        success: false,
        error
      };
    }
  }

  /**
   * allow a client to authorize a User based on a
   * JWT Authorization header
   */
  async authorize() {
    return {
      success: true
    };
  }
}

module.exports = UserController;
