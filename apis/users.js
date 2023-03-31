const express = require('express')
const router = express.Router()
const { usersController } = require('../controllers')
const UserService = require('../services/users')

const userService = new UserService(UserModel)

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = usersController

router.get('/me', (req, res) => {
  const sessionUser = req.user
  console.log(sessionUser)
  console.log(req.user)
  if (!sessionUser) {
    return res.status(403).send({
      message: 'Dewee esa no es tu familia'
    })
  }

  res.send({
    username: sessionUser.username,
    email: sessionUser.email
  })
})

router.post('/', async (req, res) => {
  const body = req.body
  const user = await userService.create(body)

  res.status(201).send(user)
})

router.get('/', async (req, res) => {
  console.log('este es un get')
  const users = await getUsers()
  console.log(users)
  res.send(users)
})

// router.post('/', async (req, res) => {
//   console.log('este es un post')
//   try {
//     const newUser = await createUser(req.body)
//     res.status(201)
//     res.send(newUser)
//   } catch (error) {
//     if (error instanceof mongoose.Error.ValidationError) {
//       res.status(400)
//       return res.send({
//         message: 'Error de validación',
//         reason: err.message
//       })
//     }
//     res.status(500)
//     return res.send({
//       error: error.message
//     })
//   }
//   res.send(
//     {
//       mesage: 'Este es un post',
//       data: req.body
//     }
//   )
// })

router.put('/:id', async (req, res) => {
  console.log('este es un put')
  const { id } = req.params
  const { body } = req
  const user = await updateUser(id, body)
  if (!user) {
    res.status(404)
    return res.send({
      message: `User ${id} not found`
    })
  }

  res.send(user)
})

router.delete('/:id', async (req, res) => {

  const { id } = req.params
  console.log('este es un delete')
  const result = await deleteUser(id)
  res.send(result)
})


module.exports = router
