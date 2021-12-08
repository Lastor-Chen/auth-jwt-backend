const router = require('express').Router()

router.post('/signin', (req, res) => {
  res.json({ foo: 'foo' })
})

module.exports = router