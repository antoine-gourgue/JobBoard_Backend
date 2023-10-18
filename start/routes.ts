import Route from '@ioc:Adonis/Core/Route'
import './routes/users'
import './routes/company'
import './routes/advertisement'
import './routes/auth'

Route.get('/', async () => {
  return { hello: 'world' }
})
