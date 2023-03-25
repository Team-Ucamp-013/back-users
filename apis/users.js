const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
  console.log('este es un get')
  res.send({ mesage: 'Este es un get' })
})

router.post('/', async (req, res) => {
  console.log('este es un post')
  res.send(
    {
      mesage: 'Este es un post',
      data: req.body
    }
  )
})

router.put('/:id', async (req, res) => {
  console.log('este es un put')
  res.send(
    {
      mesage: 'Este es un put',
      id: req.params.id,
      data: req.body
    }
  )
})

router.delete('/:id', async (req, res) => {
  console.log('este es un delete')
  res.send(
    {
      mesage: 'Este es un delete',
      id: req.params.id
    }
  )
})


module.exports = router
