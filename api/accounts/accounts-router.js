const router = require('express').Router()

router.get('/', (req, res, next) => {
  try {
    res.json('get accounts')
  } catch (error) {
    next(error)
  }
})

router.get('/:id', (req, res, next) => {
  try {
    res.json('get account by id')
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res, next) => {
  try {
    res.json('post account')
  } catch (error) {
    next(error)
  }
})

router.put('/:id', (req, res, next) => {
  try {
    res.json('update account')
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    res.json('delete account')
  } catch (error) {
    next(error)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
