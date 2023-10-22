import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'AdvertisementsController.index').middleware(['silentAuth:api'])
  Route.get('/:id', 'AdvertisementsController.getById')
  Route.put('/:id', 'AdvertisementsController.update')
  Route.post('/', 'AdvertisementsController.create')
  Route.delete('/:id', 'AdvertisementsController.delete')
}).prefix('/api/advertisements')
