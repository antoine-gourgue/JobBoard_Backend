import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'ApplyJobsController.create')
}).prefix('/api/apply-jobs')
