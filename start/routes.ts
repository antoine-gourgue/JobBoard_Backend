import Route from '@ioc:Adonis/Core/Route'
import './routes/users'
import './routes/company'
import './routes/advertisement'

Route.get('/', async () => {
  return { hello: 'world' }
})
