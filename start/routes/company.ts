import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'CompaniesController.index')
  Route.get('/:id', 'CompaniesController.getById')
  Route.put('/:id', 'CompaniesController.update')
  Route.post('/', 'CompaniesController.create')
  Route.delete('/:id', 'CompaniesController.delete')
}).prefix('/api/companies')
