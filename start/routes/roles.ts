import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'UserRolesController.index')
}).prefix('/api/roles')
