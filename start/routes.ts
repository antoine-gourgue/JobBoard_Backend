import Route from '@ioc:Adonis/Core/Route'
import './routes/users'
import './routes/company'
import './routes/advertisement'
import './routes/auth'
import './routes/roles'
import './routes/applyJobs'

Route.get('/', async () => {
  return { hello: 'world' }
})
