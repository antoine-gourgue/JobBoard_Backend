import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'UsersController.index')
  Route.get('/:id', 'UsersController.getById')
  Route.put('/:id', 'UsersController.update')
  Route.delete('/:id', 'UsersController.delete')
}).prefix('/api/users')
