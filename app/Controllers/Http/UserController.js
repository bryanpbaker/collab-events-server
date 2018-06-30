const User = use('App/Models/User');

class UserController {
  async store({ request }) {
    console.log(request);
    // const {
    //   body: { email, name, username, password, picture }
    // } = request.all();

    // try {
    //   const user = await User.findOrCreate(
    //     { email: email.toLowerCase() },
    //     {
    //       email: email.toLowerCase(),
    //       name,
    //       username,
    //       password
    //     }
    //   );

    //   return {
    //     success: true,
    //     user
    //   };
    // } catch (error) {
    //   return error;
    // }
  }
}

module.exports = UserController;
