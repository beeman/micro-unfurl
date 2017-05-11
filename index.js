const { router, get } = require('microrouter')
const unfurl = require('unfurl.js')

const rootRoute = req => req.query['url'] ? unfurl(req.query['url']) : 'Please submit parameter ?url=X'

module.exports = router(
  get('/', rootRoute)
)
