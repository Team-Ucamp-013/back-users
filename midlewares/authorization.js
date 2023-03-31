const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded.data
    req.permissions = decoded.data.permissions
    const url = req.url.replace(/\//g, ':').slice(1) // www.hola.com/hola/de/nuevo => www.hola.com:hola:de:nuevo

    if (req.user.permissions.indexOf(url) === -1) {
      return res.status(403).send({
        error: 'you shall not pass'
      })
    }
    next()
  } catch (err) {
    return res.status(403).send({
      error: err.message
    })
  }
}

module.exports = authMiddleware