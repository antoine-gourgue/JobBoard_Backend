import Route from '@ioc:Adonis/Core/Route'
import { schema, rules, ValidationException } from '@ioc:Adonis/Core/Validator'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

Route.post('api/login', async ({ auth, request, response }) => {
  const loginSchema = schema.create({
    email: schema.string({}, [rules.email()]),
    password: schema.string(),
  })

  try {
    const { email, password } = await request.validate({ schema: loginSchema })
    const token = await auth.use('api').attempt(email, password)
    return response.send({
      token,
    })
  } catch (error) {
    console.log('Error:', error)

    if (error instanceof ValidationException) {
      return response.status(422)
    }
    return response.badRequest('Invalid credentials or other error occurred.')
  }
})

Route.post('api/register', async ({ request, response, auth }) => {
  const registerSchema = schema.create({
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string(),
    firstName: schema.string(),
    name: schema.string(),
    phone: schema.string({}, [rules.mobile()]),
    address: schema.string.optional(),
    roleId: schema.number.optional(),
  })

  try {
    const payload = await request.validate({ schema: registerSchema })
    const user = new User()
    user.email = payload.email
    user.password = await Hash.make(payload.password)
    user.firstName = payload.firstName
    user.name = payload.name
    user.phone = payload.phone
    user.address = payload.address || ''
    user.roleId = payload.roleId || 1

    await user.save()
    const token = await auth.use('api').attempt(payload.email, payload.password , {expiresIn: '7 days'})
    return response.ok({ token })
  } catch (error: any) {
    console.log('Error:', error)

    if (error instanceof ValidationException) {
      return response.status(422)
    }
    return response.badRequest('Registration failed due to some error.')
  }
})
