// @ts-check
const apisRouter = require('./apis')

/** @param {import('express').Application} app */
function addRouter(app) {
  app.get('/', (req, res) => { res.render('index') })
  app.use('/api/v1', apisRouter)
}

module.exports = addRouter;
