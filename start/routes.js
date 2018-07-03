/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

Route.get('/', ({ request }) => ({ greeting: 'Collab Events API!' }));

Route.group(() => {
  // User
  Route.post('users', 'UserController.store');
  Route.post('users/login', 'UserController.login');

  // Group
  Route.get('groups', 'GroupController.index').middleware('auth');
  Route.post('groups', 'GroupController.store').middleware('auth');

  // Event
  Route.post('events', 'EventController.store').middleware('auth');
}).prefix('api/v1');
